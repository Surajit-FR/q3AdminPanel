import { useState } from "react";
import useravatar from "../../assets/images/avatar/avatar-shape2.png";
import ImagePreviewModal from "../shared/imageModal/ImageModal";
import Map from "../shared/map";
const RequestDetails = ({ details }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);

  const handleImageClick = (imageUrl, title) => {
    setSelectedImage(imageUrl);
    setModalTitle(title);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
    setModalTitle(null);
  };
  console.log({ details });

  return (
    <>
      {details ? (
        <>
          <div className="row">
            <div className="col-md-4">
              <p className="fw-bold mb-3 me-2 text-decoration-underline">
                Customer Information
              </p>
              <img
                src={
                  details?.customer_avatar
                    ? details?.customer_avatar
                    : useravatar
                }
                alt=""
                className="w-100-px h-100-px rounded-circle flex-shrink-0 me-12 overflow-hidden mb-3"
                onClick={() =>
                  handleImageClick(
                    details?.customer_avatar
                      ? details?.customer_avatar
                      : useravatar,
                    "Profile Picture"
                  )
                }
              />

              <p className="mb-1">
                <strong>Name:</strong> {details?.customer_fullName}
              </p>
              <p className="mb-1">
                <strong>Email: </strong>
                {details?.customer_email}
              </p>
              <p className="mb-1">
                <strong>Phone: </strong>
                {`${details?.customer_countryCode}  ${details?.customer_phoneNumber}`}
              </p>
              {/* <p className="mb-1">
    <strong>Joined:</strong>{" "}
    {new Date(details?.createdAt).toLocaleString() || "--"}
  </p> */}
              {/* <p className="mb-1">
    <strong>Driving License:</strong>{" "}
    {details?.additionalInfo?.driverLicense || "--"}
  </p> */}
            </div>
            <div className="col-md-4">
              <p className="fw-bold mb-3 me-2 text-decoration-underline">
                Service Provider Information
              </p>
              <img
                src={details?.sp_avatar ? details?.sp_avatar : useravatar}
                alt=""
                className="w-100-px h-100-px rounded-circle flex-shrink-0 me-12 overflow-hidden mb-3"
                onClick={() =>
                  handleImageClick(
                    details?.sp_avatar ? details?.sp_avatar : useravatar,
                    "Profile Picture"
                  )
                }
              />

              <p className="mb-1">
                <strong>Name:</strong> {details?.sp_fullName}
              </p>
              <p className="mb-1">
                <strong>Email: </strong>
                {details?.sp_email}
              </p>
              <p className="mb-1">
                <strong>Phone: </strong>
                {`${details?.customer_countryCode}  ${details?.sp_phoneNumber}`}
              </p>
              <p className="mb-1">
                <strong>Driving License: </strong>
                {details?.sp_drivingLicense}
              </p>
              <p className="mb-1">
                <strong>Insurance Number: </strong>
                {details?.sp_insuranceNumber}
              </p>
            </div>

            <div className="col-md-4">
              <p className="fw-bold mb-3 me-2 text-decoration-underline">
                Service-Information
              </p>
              <p className="mb-1">
                <img
                  src={
                    details?.disputedVehicleImage
                      ? details?.disputedVehicleImage
                      : useravatar
                  }
                  alt=""
                  className="w-100-px h-100-px rounded-circle flex-shrink-0 me-12 overflow-hidden mb-3"
                  onClick={() =>
                    handleImageClick(
                      details?.disputedVehicleImage
                        ? details?.disputedVehicleImage
                        : useravatar,
                      "Disputed Vehicle Picture"
                    )
                  }
                />
              </p>
              <p className="mb-1">
                <strong>Service Code: </strong>
                {details?.serviceCode}
              </p>
              <p className="mb-1">
                <strong>Disputed Vehicle Type: </strong>
                {details?.toeVehicle_type}
              </p>
              <p className="mb-1">
                <strong>Created At: </strong>
                {new Date(details?.createdAt).toLocaleString()}
              </p>
              {details?.startedAt && (
                <p className="mb-1">
                  <strong>Started At: </strong>
                  {new Date(details?.startedAt).toLocaleString()}
                </p>
              )}

              <p className="mb-1">
                <strong>Service Status: </strong>
                {details?.serviceProgess &&
                  details?.serviceProgess.replace(/([A-Z])/g, " $1").trim()}
              </p>

              <p className="mb-1">
                <strong>Pickup Location: </strong>
                {details?.pickupLocation}
              </p>

              <p className="mb-1">
                <strong>Drop Location: </strong>
                {details?.destinyLocation}
              </p>

              <p className="mb-1">
                <strong>Total Distance (mi) : </strong>
                {details?.totalDistance}
              </p>
              <p className="mb-1">
                <strong>Total Cost ($) : </strong>
                {details?.towing_cost}
              </p>
              {details[0]?.isEngaged.length > 0 && (
                <>
                  <p className="mb-1">
                    <strong>Current Service Id: </strong>
                    {details[0]?.isEngaged[0]._id}
                  </p>
                  <p className="mb-1">
                    <strong>Current Service State: </strong>
                    {details[0]?.isEngaged[0].serviceProgess}
                  </p>
                </>
              )}
            </div>

            {details?.serviceSpecificNotes && (
              <div className="col-md-12">
                <div className="row justify-content-center">
                  <p className="fw-bold mb-2 me-2 text-decoration-underline">
                    Service-Specific-Notes
                  </p>
                  <p className="mb-1">{details?.serviceSpecificNotes}</p>
                </div>
              </div>
            )}
          </div>
          <Map />
        </>
      ) : (
        <p>No data Found</p>
      )}
      {/* Image Modal */}
      {selectedImage && (
        <ImagePreviewModal
          imageUrl={selectedImage}
          onClose={handleModalClose}
          modalTitle={modalTitle}
        />
      )}
    </>
  );
};

export default RequestDetails;
