import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { serviceListThunk } from "../../store/thunks/serviceRequestThink";

const Towingrequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { serviceRequestList } = useSelector((state) => state.serviceRequest);
  const [itemsPerpage, setperPage] = useState(10);
  const [page, setpage] = useState(1);
  const [query, setquery] = useState("");

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
      })
    );
  }, [dispatch, page, itemsPerpage, query]);
  console.log({ serviceRequestList });

  const handleNavigation = (e, id) => {
    e.preventDefault();
    navigate(`/service-request-details/${id}`);
  };

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
        <a
          href="add-user.html"
          className="btn btn-primary text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2"
        >
          <iconify-icon
            icon="ix:download"
            className="icon text-xl line-height-1"
          ></iconify-icon>
          Download CSV
        </a>
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
                          {cust.toeVehicle_type}
                        </span>
                      </td>
                      <td>
                        {cust?.serviceProgess.replace("Service", "").length > 10
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
                        </div>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
        {/* {!query ? ( */}
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
      </div>
    </div>
  );
};

export default Towingrequest;
