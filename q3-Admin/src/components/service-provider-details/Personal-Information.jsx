import useravatar from "../../assets/images/avatar/avatar-shape2.png";

const PersonalInformation = ({ details }) => {
  return (
    <>
      {details && details.length > 0 ? (
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
          <p className="mb-1">
            <strong>Joined:</strong>{" "}
            {new Date(details[0]?.createdAt).toLocaleString() || "--"}
          </p>
          <p className="mb-1">
            <strong>Driving License:</strong>{" "}
            {details[0]?.additionalInfo?.driverLicense || "--"}
          </p>
        </div>
      ) : (
        <p>No data Found</p>
      )}
    </>
  );
};

export default PersonalInformation;
