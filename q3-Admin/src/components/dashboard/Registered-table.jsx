import { Link } from "react-router-dom";

const Registeredtable = ({
  navigateTo,
  changeActiveTabStatus,
  activeTab,
  customerList,
  serviceProviderList,
}) => {
  return (
    <div className="col-md-9">
      <div className="card h-100">
        <div className="card-body p-24">
          <div className="d-flex flex-wrap align-items-center gap-1 justify-content-between mb-16">
            <ul
              className="nav border-gradient-tab nav-pills mb-0"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link d-flex align-items-center active"
                  id="pills-to-do-list-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-to-do-list"
                  type="button"
                  role="tab"
                  aria-controls="pills-to-do-list"
                  aria-selected="true"
                  onClick={() => changeActiveTabStatus("customer-list")}
                >
                  Latest Registered Customers
                  <span className="text-sm fw-semibold py-6 px-12 bg-neutral-500 rounded-pill text-white line-height-1 ms-12 notification-alert">
                    {customerList &&
                    customerList.pagination &&
                    customerList.pagination.total
                      ? customerList.pagination.total
                      : 0}
                  </span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link d-flex align-items-center"
                  id="pills-recent-leads-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-recent-leads"
                  type="button"
                  role="tab"
                  aria-controls="pills-recent-leads"
                  aria-selected="false"
                  tabIndex="-1"
                  onClick={() => changeActiveTabStatus("service-provider-list")}
                >
                  Latest Registered Service Providers
                  <span className="text-sm fw-semibold py-6 px-12 bg-neutral-500 rounded-pill text-white line-height-1 ms-12 notification-alert">
                    {serviceProviderList &&
                    serviceProviderList.pagination &&
                    serviceProviderList.pagination.total
                      ? serviceProviderList.pagination.total
                      : 0}
                  </span>
                </button>
              </li>
            </ul>
            <Link
              to={`/${activeTab}`}
              className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
              // onClick={}
            >
              View All
              <iconify-icon
                icon="solar:alt-arrow-right-linear"
                className="icon"
              ></iconify-icon>
            </Link>
          </div>

          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-to-do-list"
              role="tabpanel"
              aria-labelledby="pills-to-do-list-tab"
              tabIndex="0"
            >
              <div className="table-responsive scroll-sm">
                <table className="table bordered-table sm-table mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Users </th>
                      <th scope="col">Registered On</th>
                      <th scope="col">Phone</th>
                      <th scope="col" className="text-center">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerList && customerList.customers.length > 0 ? (
                      customerList.customers.map((cus) => (
                        <tr key={cus?._id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={
                                  cus?.avatar
                                    ? cus.avatar
                                    : "assets/images/users/user2.png"
                                }
                                alt=""
                                className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                              />
                              <div className="flex-grow-1">
                                <h6 className="text-md mb-0 fw-medium">
                                  {cus?.fullName}
                                </h6>
                                <span className="text-sm text-secondary-light fw-medium">
                                  {cus?.email}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td> {new Date(cus?.createdAt).toLocaleDateString() ||
                          "-- --"}</td>
                          <td>{cus?.countryCode} {cus?.phone}</td>
                          <td className="text-center">
                            <span className={`${cus?.isVerified ? "bg-success-focus text-success-main": "bg-danger-focus text-danger-main" } px-24 py-4 rounded-pill fw-medium text-sm`}>
                              {cus?.isVerified ? "Active" : "Banned"}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <p>NO RESULTS FOUND</p>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-recent-leads"
              role="tabpanel"
              aria-labelledby="pills-recent-leads-tab"
              tabIndex="0"
            >
              <div className="table-responsive scroll-sm">
                <table className="table bordered-table sm-table mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Users </th>
                      <th scope="col">Registered On</th>
                      <th scope="col">Phone</th>
                      <th scope="col" className="text-center">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                   {serviceProviderList && serviceProviderList.serviceProviders.length > 0 ? (
                      serviceProviderList.serviceProviders.map((cus) => (
                        <tr key={cus?._id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={
                                  cus?.avatar
                                    ? cus.avatar
                                    : "assets/images/users/user2.png"
                                }
                                alt=""
                                className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                              />
                              <div className="flex-grow-1">
                                <h6 className="text-md mb-0 fw-medium">
                                  {cus?.fullName}
                                </h6>
                                <span className="text-sm text-secondary-light fw-medium">
                                  {cus?.email}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td> {new Date(cus?.createdAt).toLocaleDateString() ||
                          "-- --"}</td>
                          <td>{cus?.countryCode} {cus?.phone}</td>
                          <td className="text-center">
                            <span className={`${cus?.isVerified ? "bg-success-focus text-success-main": "bg-danger-focus text-danger-main" } px-24 py-4 rounded-pill fw-medium text-sm`}>
                              {cus?.isVerified ? "Vrified" : "Unverified"}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <p>NO RESULTS FOUND</p>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registeredtable;
