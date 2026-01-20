import { Link } from "react-router-dom";

const Performercard = ({ performerData }) => {
  return (
    <div className="col-md-3">
      <div className="card h-100">
        <div className="card-body">
          <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
            <h6 className="mb-2 fw-bold text-lg mb-0">Top Performer</h6>
            <Link
              to="/service-provider-list"
              className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
            >
              View All
              <iconify-icon
                icon="solar:alt-arrow-right-linear"
                className="icon"
              ></iconify-icon>
            </Link>
          </div>

          <div className="mt-32">
            {performerData && performerData.length > 0 ? (
              performerData.map((data) => (
                <div className="d-flex align-items-center justify-content-between gap-3 mb-24" key={data?._id}>
                  <div className="d-flex align-items-center">
                    <img
                      src={data?.sp_avatar? data?.sp_avatar:"assets/images/users/user1.png"}
                      alt=""
                      className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                    />
                    <div className="flex-grow-1">
                      <h6 className="text-md mb-0 fw-medium">{data?.sp_fullName}</h6>
                      <span className="text-sm text-secondary-light fw-medium">
                        Ph: {data?.sp_phoneNumber}
                      </span>
                    </div>
                  </div>
                  <span className="text-primary-light text-md fw-medium">
                    ${data?.towing_cost}
                  </span>
                </div>
              ))
            ) : (
              <p>No Data Found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performercard;
