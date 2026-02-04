import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import Pagination from "react-js-pagination";
import {
  serviceListThunk,
  serviceListToDownloadThunk,
} from "../../store/thunks/serviceRequestThink";
import { CSVLink } from "react-csv";
import { clearItems } from "../../store/reducers/serviceReducer";
import ConfirmaPayModal from "../service-provider-list/ConfirmPayModal";
import { makePaymentThunk } from "../../store/thunks/transactionsThunk";

const headers = [
  { label: "Customer Name", key: "customerName" },
  { label: "Date Registered", key: "dateRegestered" },
  { label: "Pickup Location", key: "pickupLocation" },
  { label: "Destination", key: "destinyLocation" },
  { label: "Distance (mi)", key: "totalDistance" },
  { label: "Total Cost", key: "towing_cost" },
  { label: "Service Code", key: "serviceCode" },
  { label: "Sp Name", key: "sp_fullName" },
  { label: "Sp Phone", key: "sp_phoneNumber" },
  { label: "Payment Status", key: "paymentStatus" },
];
const Towingrequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    serviceRequestList,
    getAllServiceLoading,
    allServiceRequestsToDownload,
  } = useSelector((state) => state.serviceRequest);

  const { paymentLoading } = useSelector((state) => state.transaction);

  const [itemsPerpage, setperPage] = useState(10);
  const [page, setpage] = useState(1);
  const [query, setquery] = useState("");
  const csvref = useRef();

  const handlePageChange = (pageNum) => {
    setpage(pageNum);
  };
  useEffect(() => {
    dispatch(
      serviceListThunk({
        data: {
          page,
          limit: itemsPerpage,
          query,
        },
      }),
    );
  }, [dispatch, page, itemsPerpage, query]);
  const handleCsvClick = useCallback(() => {
    dispatch(
      serviceListToDownloadThunk({
        data: {
          page: 1,
          limit: 10000,
          query: "",
        },
      }),
    );
  }, [dispatch]);

  const dataToExport = (data) => {
    if (data?.data?.ServiceDetails && data?.data?.ServiceDetails.length > 0) {
      return data?.data?.ServiceDetails.map((item) => ({
        customerName: `${item?.customer_fullName}`,
        dateRegestered:
          new Date(item?.createdAt).toLocaleDateString() || "-- --",
        pickupLocation: `${item?.pickupLocation}`,
        destinyLocation: `${item?.destinyLocation}`,
        totalDistance: `${item?.totalDistance}`,
        serviceCode: `${item?.serviceCode}`,
        sp_fullName: `${item?.sp_fullName}` || "-- --",
        sp_phoneNumber: `${item?.sp_phoneNumber}` || "-- --",
        towing_cost: `$${item?.towing_cost}` || "-- --",
        paymentStatus: `${item?.isPaymentComplete ? "Paid" : "Due"}`,
      }));
    }
    return [];
  };

  useEffect(() => {
    if (
      allServiceRequestsToDownload &&
      allServiceRequestsToDownload.data &&
      allServiceRequestsToDownload.data.ServiceDetails &&
      allServiceRequestsToDownload.data.ServiceDetails.length > 0 &&
      getAllServiceLoading === "success"
    ) {
      csvref.current?.link.click();
    }
  }, [allServiceRequestsToDownload, getAllServiceLoading]);

  const handleNavigation = (e, id) => {
    e.preventDefault();
    navigate(`/service-request-details/${id}`);
  };
  const handlePaymentToSp = (restData) => {
    const payload = { ...restData };
    dispatch(makePaymentThunk(payload));
  };
  useEffect(() => {
    return () => {
      dispatch(clearItems());
    };
  }, [dispatch]);
  return (
    <div className="card h-100 p-0 radius-12">
      <div className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between">
        <div className="d-flex align-items-center flex-wrap gap-3">
          <span className="text-md fw-medium text-secondary-light mb-0">
            Show
          </span>
          <select
            className="form-select form-select-sm w-auto ps-12 py-6 radius-12 h-40-px"
            onChange={(e) => setperPage(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="100">100</option>
          </select>
          <form
            className="navbar-search"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              className="bg-base h-40-px w-auto"
              name="search"
              placeholder="Search"
              onChange={(e) => setquery(e.target.value)}
            />
            <iconify-icon
              icon="ion:search-outline"
              className="icon"
            ></iconify-icon>
          </form>
        </div>
        {getAllServiceLoading === "success" && (
          <CSVLink
            data={dataToExport(allServiceRequestsToDownload)}
            headers={headers}
            filename={"service-request-list.csv"}
            ref={csvref}
          />
        )}
        <button
          className="btn btn-primary text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2"
          onClick={() => handleCsvClick()}
        >
          <iconify-icon
            icon="ix:download"
            className="icon text-xl line-height-1"
          ></iconify-icon>
          Download CSV
        </button>
      </div>
      <div className="card-body p-24">
        <div className="table-responsive scroll-sm">
          <table className="table bordered-table sm-table mb-0">
            <thead>
              <tr>
                <th scope="col">
                  <div className="d-flex align-items-center gap-10">S.L</div>
                </th>
                <th scope="col">Create Date</th>
                <th scope="col">customer Name</th>
                <th scope="col">Service Provider Name</th>
                <th scope="col">Vehicle Type</th>
                <th scope="col">Status</th>
                <th scope="col">Cost</th>
                <th scope="col" className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {serviceRequestList?.ServiceDetails &&
              serviceRequestList?.ServiceDetails.length > 0
                ? serviceRequestList?.ServiceDetails.map((cust, index) => (
                    <>
                      <ConfirmaPayModal
                        modalId={`confirmPaySp-alert-modal-${index}`}
                        modalText={`Fill Up The Details to pay ${cust?.sp_fullName}`}
                        spId={cust?.serviceProviderId}
                        serviceId={cust?._id}
                        onDelete={handlePaymentToSp}
                        isSuccess={paymentLoading}
                      />
                      <tr key={cust?._id}>
                        <td>
                          <div className="d-flex align-items-center gap-10">
                            {index + 1}
                          </div>
                        </td>
                        <td>
                          {new Date(cust?.createdAt).toLocaleDateString() ||
                            "-- --"}
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src={
                                cust?.customer_avatar
                                  ? cust?.customer_avatar
                                  : "assets/images/user-list/user-list1.png"
                              }
                              alt=""
                              className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                            />
                            <div className="flex-grow-1">
                              <span className="text-md mb-0 fw-normal text-secondary-light">
                                {cust?.customer_fullName}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="text-md mb-0 fw-normal text-secondary-light">
                            {cust?.sp_fullName ? cust?.sp_fullName : "-- --"}
                          </span>
                        </td>
                        <td>
                          <span className="text-md mb-0 fw-normal text-secondary-light">
                            {cust.toeVehicle_type}
                          </span>
                        </td>
                        <td>
                          {cust?.serviceProgess.replace("Service", "").length >
                          10
                            ? cust?.serviceProgess
                                .replace("Service", "")
                                .slice(0, 9)
                            : cust?.serviceProgess.replace("Service", "")}
                        </td>
                        <td>
                          {cust.towing_cost
                            ? `$${cust.towing_cost.toFixed(2)}`
                            : "-- --"}
                        </td>
                        <td className="text-center">
                          <div className="d-flex align-items-center gap-10 justify-content-center">
                            <button
                              type="button"
                              className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                              onClick={(e) => handleNavigation(e, cust?._id)}
                            >
                              <iconify-icon
                                icon="majesticons:eye-line"
                                className="icon text-xl"
                              ></iconify-icon>
                            </button>
                            {/* <button
      type="button"
      className="remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
    >
      <iconify-icon
        icon="fluent:delete-24-regular"
        className="menu-icon"
      ></iconify-icon>
    </button> */}
                            {cust?.sp_fullName && (
                              <button
                                type="button"
                                className="remove-item-btn bg-success-focus bg-hover-success-200 text-success-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                data-bs-toggle="modal"
                                data-bs-target={`#confirmPaySp-alert-modal-${index}`}
                              >
                                Pay
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    </>
                  ))
                : null}
            </tbody>
          </table>
        </div>
        {!query && (
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mt-24">
            <span>
              Showing{" "}
              {(serviceRequestList?.pagination?.page - 1) * itemsPerpage + 1} to{" "}
              {serviceRequestList?.pagination?.page * itemsPerpage >=
              serviceRequestList?.pagination?.total
                ? serviceRequestList?.pagination?.total
                : serviceRequestList?.pagination?.page * itemsPerpage}{" "}
              of {serviceRequestList?.pagination?.total} entries
            </span>
            <Pagination
              activePage={page}
              itemsCountPerPage={itemsPerpage}
              totalItemsCount={serviceRequestList?.pagination?.total || 0}
              pageRangeDisplayed={itemsPerpage}
              onChange={handlePageChange}
              itemClass="page-item"
              linkClass="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Towingrequest;
