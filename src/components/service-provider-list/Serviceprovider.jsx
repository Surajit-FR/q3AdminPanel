import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useRef, useState } from "react";
import Pagination from "react-js-pagination";
import {
  getAllServiceProviderCsvThunk,
  serviceProviderBanUnbanThunk,
  serviceProviderListThunk,
} from "../../store/thunks/serviceProviderThunk";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../shared/confirmationModal/confirmationModal";
import { CSVLink } from "react-csv";
import { clearItems } from "../../store/reducers/serviceproviderreducer";
import { deleteUserThunk } from "../../store/thunks/authThunk";
// import ConfirmaPayModal from "./ConfirmPayModal";

const headers = [
  { label: "Name", key: "name" },
  { label: "Email", key: "email" },
  { label: "Phone", key: "phone" },
  { label: "Date Registered", key: "dateRegestered" },
  { label: "Verification", key: "isVerified" },
  { label: "Total Associated  Services", key: "bookedServices" },
];

const Serviceprovider = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    serviceProviderList,
    banLoading,
    getAllSpLoading,
    allServiceProvidersToDownload,
  } = useSelector((state) => state.serviceProvider);
  const {isDeleateUserLoading} = useSelector((state)=>state.auth)
  const [itemsPerpage, setperPage] = useState(10);
  const [page, setpage] = useState(1);
  const [query, setquery] = useState("");
  const csvref = useRef();

  const dataToExport = (data) => {
    if (
      data?.data?.serviceProviders &&
      data?.data?.serviceProviders.length > 0
    ) {
      return data?.data?.serviceProviders.map((item) => ({
        name: `${item?.fullName}`,
        email: item?.email || "-- --",
        phone: `${item?.countryCode} ${item?.phone}` || "-- --",
        dateRegestered:
          new Date(item?.createdAt).toLocaleDateString() || "-- --",
        isVerified: item?.isVerified ? "Verified" : "Unverified",
        bookedServices: item?.totalBookedServices || "-- --",
      }));
    }
    return [];
  };

  const handlePageChange = (pageNum) => {
    setpage(pageNum);
  };
  useEffect(() => {
    dispatch(
      serviceProviderListThunk({
        data: {
          page,
          limit: itemsPerpage,
          query,
        },
      }),
    );
  }, [dispatch, page, itemsPerpage, query]);


  useEffect(() => {
    if (banLoading === "success") {
      dispatch(
        serviceProviderListThunk({
          data: {
            page,
            limit: itemsPerpage,
            query: '',
          },
        }),
      );
    }
  }, [dispatch, page, itemsPerpage, banLoading]);
 
  useEffect(() => {
    if (isDeleateUserLoading === "success") {
      dispatch(
        serviceProviderListThunk({
          data: {
            page,
            limit: itemsPerpage,
            query:'',
          },
        }),
      );
    }
  }, [dispatch, page, itemsPerpage, isDeleateUserLoading]);
  const handleCsvClick = useCallback(() => {
    dispatch(
      getAllServiceProviderCsvThunk({
        data: {
          page: 1,
          limit: 10000,
          query: "",
        },
      }),
    );
  }, [dispatch]);
  useEffect(() => {
    if (
      allServiceProvidersToDownload &&
      allServiceProvidersToDownload.data &&
      allServiceProvidersToDownload.data.serviceProviders &&
      allServiceProvidersToDownload.data.serviceProviders.length > 0 &&
      getAllSpLoading === "success"
    ) {
      csvref.current?.link.click();
    }
  }, [allServiceProvidersToDownload, getAllSpLoading]);
  const handleNavigation = (e, id) => {
    e.preventDefault();
    navigate(`/service-provider-details/${id}`);
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
          <form className="navbar-search">
            <input
              type="text"
              className="bg-base h-40-px w-auto"
              name="search"
              placeholder="Search"
              onSubmit={(e) => {
                e.preventDefault();
              }}
              onChange={(e) => setquery(e.target.value)}
            />
            <iconify-icon
              icon="ion:search-outline"
              className="icon"
            ></iconify-icon>
          </form>
        </div>
        {getAllSpLoading === "success" && (
          <CSVLink
            data={dataToExport(allServiceProvidersToDownload)}
            headers={headers}
            filename={"service-providers-list.csv"}
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
                <th scope="col">Join Date</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Status</th>
                <th scope="col" className="text-center">
                  Services
                </th>
                <th scope="col" className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {serviceProviderList?.serviceProviders &&
              serviceProviderList?.serviceProviders.length > 0
                ? serviceProviderList.serviceProviders.map((cust, index) => (
                    <tr key={cust?._id}>
                      <ConfirmationModal
                        modalId={`banSp-alert-modal-${index}`}
                        modalText={`Want To ${
                          cust?.isBanned ? "Unban" : "Ban"
                        } The Service Provider ( ${cust?.fullName})?`}
                        onDelete={(e) => {
                          e.preventDefault();
                          dispatch(
                            serviceProviderBanUnbanThunk({
                              isBan: !cust?.isBan,
                              userId: cust?._id,
                            }),
                          );
                        }}
                      />
                      <ConfirmationModal
                        modalId={`deleteSp-alert-modal-${index}`}
                        modalText={`Want To Completely Remove The Service Provider (${cust?.fullName})?`}
                        onDelete={(e) => {
                          e.preventDefault();
                          dispatch(
                            deleteUserThunk({
                              userId: cust?._id,
                            }),
                          );
                        }}
                      />

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
                              cust?.avatar
                                ? cust?.avatar
                                : "assets/images/user-list/user-list1.png"
                            }
                            alt=""
                            className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                          />
                          <div className="flex-grow-1">
                            <span className="text-md mb-0 fw-normal text-secondary-light">
                              {cust?.fullName}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-md mb-0 fw-normal text-secondary-light">
                          {cust.email}
                        </span>
                      </td>
                      <td>{cust?.phone}</td>
                      <td>
                        <p
                          className={
                            cust.isVerified
                              ? "text-success-main"
                              : "text-danger-main"
                          }
                        >
                          {cust.isVerified ? "Verified" : "UnVerified"}
                        </p>
                      </td>
                      <td className="text-center">
                        {cust?.totalBookedServices}
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
                          {/* {cust?.isBanned ? (
                            <button
                              type="button"
                              className="bg-success-focus bg-hover-success-200 text-success-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                              data-bs-toggle="modal"
                              data-bs-target={`#banSp-alert-modal-${index}`}
                            >
                              <iconify-icon
                                icon="majesticons:ticket-check-line"
                                className="icon text-xl"
                              ></iconify-icon>
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                              data-bs-toggle="modal"
                              data-bs-target={`#banSp-alert-modal-${index}`}
                            >
                              <iconify-icon
                                icon="fluent:record-stop-48-regular"
                                className="menu-icon"
                              ></iconify-icon>
                            </button>
                          )} */}
                          <button
                            type="button"
                            className="remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                            data-bs-toggle="modal"
                            data-bs-target={`#deleteSp-alert-modal-${index}`}
                          >
                            <iconify-icon
                              icon="fluent:delete-24-regular"
                              className="menu-icon"
                            ></iconify-icon>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>

        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mt-24">
          <span>
            {" "}
            Showing{" "}
            {(serviceProviderList?.pagination?.page - 1) * itemsPerpage +
              1} to{" "}
            {serviceProviderList?.pagination?.page * itemsPerpage >=
            serviceProviderList?.pagination?.total
              ? serviceProviderList?.pagination?.total
              : serviceProviderList?.pagination?.page * itemsPerpage}{" "}
            of {serviceProviderList?.pagination?.total} entries
          </span>
          <Pagination
            activePage={page}
            itemsCountPerPage={itemsPerpage}
            totalItemsCount={serviceProviderList?.pagination?.total || 0}
            pageRangeDisplayed={itemsPerpage}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md"
          />
          {/* <ul className="pagination d-flex flex-wrap align-items-center gap-2 justify-content-center">
            <li className="page-item">
              <a
                className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md"
                href="javascript:void(0)"
              >
                <iconify-icon
                  icon="ep:d-arrow-left"
                  className=""
                ></iconify-icon>
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md bg-primary-600 text-white"
                href="javascript:void(0)"
              >
                1
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px"
                href="javascript:void(0)"
              >
                2
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md"
                href="javascript:void(0)"
              >
                3
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md"
                href="javascript:void(0)"
              >
                4
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md"
                href="javascript:void(0)"
              >
                5
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md"
                href="javascript:void(0)"
              >
                {" "}
                <iconify-icon
                  icon="ep:d-arrow-right"
                  className=""
                ></iconify-icon>{" "}
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Serviceprovider;
