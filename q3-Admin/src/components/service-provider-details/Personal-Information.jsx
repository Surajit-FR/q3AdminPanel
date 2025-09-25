import useravatar from "../../assets/images/avatar/avatar-shape2.png";

const PersonalInformation = ({ details }) => {
  return (
    <>
      {details && details.length > 0 ? (
        <div className="row">
          <div className="col-md-4">
            <p className="fw-bold mb-3 me-2 text-decoration-underline">
              Personal-Information
            </p>
            <img
              src={details[0]?.avatar ? details[0]?.avatar : useravatar}
              alt=""
              className="w-200-px h-200-px rounded-circle flex-shrink-0 me-12 overflow-hidden mb-3"
            />

            <p className="mb-1">
              <strong>Name:</strong> {details[0]?.fullName}
            </p>
            <p className="mb-1">
              <strong>Email: </strong>
              {details[0]?.email}
            </p>
            <p className="mb-1">
              <strong>Phone: </strong>
              {details[0]?.phone}
            </p>
            {/* <p className="mb-1">
            <strong>Joined:</strong>{" "}
            {new Date(details[0]?.createdAt).toLocaleString() || "--"}
          </p> */}
            {/* <p className="mb-1">
            <strong>Driving License:</strong>{" "}
            {details[0]?.additionalInfo?.driverLicense || "--"}
          </p> */}
          </div>
          <div className="col-md-4">
            <p className="fw-bold mb-3 me-2 text-decoration-underline">
              Business-Information
            </p>
            <p className="mb-1">
              <strong>Created At: </strong>
              {details[0]?.sp_details?.createdAt
                ? new Date(
                    details[0]?.sp_details?.createdAt
                  ).toLocaleDateString()
                : "-- --"}
            </p>
            <p className="mb-1">
              <strong>Driver License: </strong>
              {details[0]?.sp_details?.driverLicense
                ? details[0]?.sp_details?.driverLicense
                : "-- --"}
            </p>
            <p className="mb-1">
              <strong>Insurance Number: </strong>
              {details[0]?.sp_details?.insuranceNumber
                ? details[0]?.sp_details?.insuranceNumber
                : "-- --"}
            </p>
            <p className="mb-1">
              <strong>Updated At: </strong>
              {details[0]?.sp_details?.updatedAt
                ? new Date(
                    details[0]?.sp_details?.updatedAt
                  ).toLocaleDateString()
                : "-- --"}
            </p>
            <p className="mb-1">
              <strong>User Type: </strong>
              {details[0]?.userType === "ServiceProvider"
                ? "Service Provider"
                : "Customer"}
            </p>
          </div>
          <div className="col-md-12">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={
                    details[0]?.sp_details?.driverLicenseImage
                      ? details[0]?.sp_details?.driverLicenseImage
                      : useravatar
                  }
                  alt=""
                  className="w-300-px h-3
            00-px flex-shrink-0 me-12 overflow-hidden mb-3 "
                />
                <p>Driving License</p>
              </div>
              <div className="col-md-4">
                <img
                  src={
                    details[0]?.sp_details?.insuranceImage
                      ? details[0]?.sp_details?.insuranceImage
                      : useravatar
                  }
                  alt=""
                  className="w-300-px h-3
            00-px flex-shrink-0 me-12 overflow-hidden mb-3"
                />
                <p>Insurance Policy</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No data Found</p>
      )}
    </>
  );
};

export default PersonalInformation;
