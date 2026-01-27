import { useState } from "react";
import useravatar from "../../assets/images/avatar/avatar-shape2.png";
import ImagePreviewModal from "../shared/imageModal/ImageModal";
import ConfirmationModal from "../shared/confirmationModal/confirmationModal";
import { deleteUserThunk } from "../../store/thunks/authThunk";

const PersonalInformation = ({ details, updateServiceProviderStatus }) => {
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

  return (
    <>
      {details && details.length > 0 ? (
        <>
          <ConfirmationModal
            modalId="spStatus-alert-modal"
            modalText={`Want To ${
              details[0]?.isVerified ? "Unverify" : "Verify"
            } The Service Provider?`}
            onDelete={(e) =>
              updateServiceProviderStatus(e, {
                serviceProviderId: details[0]?._id,
                data: { isVerified: !details[0]?.isVerified },
              })
            }
          />
          {/* <ConfirmationModal
            modalId="spRemove-alert-modal"
            modalText={`Want To Completely Remove The Service Provider?`}
            onDelete={(e) => {
              e.preventDefault();
              dispatch(
                deleteUserThunk({
                  userId: details[0]?._id,
                }),
              );
            }}
          /> */}
          <div className="row">
            <div className="col-md-4">
              <p className="fw-bold mb-3 me-2 text-decoration-underline">
                Personal-Information
              </p>
              <img
                src={details[0]?.avatar ? details[0]?.avatar : useravatar}
                alt=""
                className="w-200-px h-200-px rounded-circle flex-shrink-0 me-12 overflow-hidden mb-3"
                onClick={() =>
                  handleImageClick(
                    details[0]?.avatar ? details[0]?.avatar : useravatar,
                    "Profile Picture",
                  )
                }
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
                      details[0]?.sp_details?.createdAt,
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
                      details[0]?.sp_details?.updatedAt,
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
            <div className="col-md-4">
              <p className="fw-bold mb-3 me-2 text-decoration-underline">
                Engagement-Information
              </p>
              <p className="mb-1">
                <strong>Status: </strong>
                {details[0]?.isOnline ? (
                  <span className="text-success-main">Online</span>
                ) : (
                  <span className="text-danger-main">Offline</span>
                )}
              </p>
              {details[0]?.isOnline?.location && (
                <p className="mb-1">
                  <strong>Current Active Location: </strong>
                  {details[0]?.isOnline?.location}
                </p>
              )}
              {details[0]?.isOnline?.latitude && (
                <p className="mb-1">
                  <strong>Latitude: </strong>
                  {details[0]?.isOnline?.latitude}
                </p>
              )}
              {details[0]?.isOnline?.latitude && (
                <p className="mb-1">
                  <strong>Longitude: </strong>
                  {details[0]?.isOnline?.longitude}
                </p>
              )}

              <p className="mb-1">
                <strong>Available: </strong>
                {details[0]?.isEngaged.length > 0 ? "No" : "Yes"}
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
                    className="h-440-px flex-shrink-0 me-12 overflow-hidden mb-3 "
                    //  style={{objectFit:"cover"}}
                    onClick={() =>
                      handleImageClick(
                        details[0]?.sp_details?.driverLicenseImage
                          ? details[0]?.sp_details?.driverLicenseImage
                          : useravatar,
                        "Driving License",
                      )
                    }
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
                    className="h-440-px flex-shrink-0 me-12 overflow-hidden mb-3"
                    // style={{objectFit:"cover"}}
                    onClick={() =>
                      handleImageClick(
                        details[0]?.sp_details?.insuranceImage
                          ? details[0]?.sp_details?.insuranceImage
                          : useravatar,
                        "Insurance Policy",
                      )
                    }
                  />
                  <p>Insurance Policy</p>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row justify-content-center">
                <button
                  type="button"
                  className={`col-md-4 fw-medium d-flex justify-content-center align-items-center text-base 
              ${
                details[0]?.isVerified
                  ? "btn-outline-danger bg-danger-400 bg-hover-danger-400"
                  : " btn-outline-success bg-success-400 bg-hover-success-400"
              }`}
                  data-bs-toggle="modal"
                  data-bs-target="#spStatus-alert-modal"
                >
                  {details[0]?.isVerified
                    ? "Unverify Service Provider"
                    : "Verify Service Provider"}
                </button>
              </div>
              {/* <div className="row justify-content-center mt-3">
                <button
                  type="button"
                  className={`col-md-4 fw-medium d-flex justify-content-center align-items-center text-base btn-outline-danger bg-danger-400 bg-hover-danger-400`}
                  data-bs-toggle="modal"
                  data-bs-target="#spRemove-alert-modal"
                >
                  Remove Service Provider
                </button>
              </div> */}
            </div>
          </div>
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

export default PersonalInformation;
