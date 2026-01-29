import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "../common/Loader";

const ConfirmaPayModal = ({
  modalId,
  modalText,
  onDelete,
  spId,
  serviceId,
  isSuccess,
}) => {
  const [initialState] = useState({});
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialState,
  });

  const onSubmit = (data) => {
    setLoading(true);
    const { dob } = data;

    const split = dob.split("-");
    console.log({ split });
    onDelete({
      spId,
      serviceId,
      ...data,
      dob: { year: split[0], month: split[1], day: split[2] },
    });
  };
  useEffect(() => {
    if (isSuccess === "success") {
      setLoading(false);
      reset(initialState);
    }
  }, [isSuccess, reset]);

  return (
    <>
      <div
        id={modalId}
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body p-4">
              {loading ? (
                <div className="row m-5 justify-content-center">
                <Loader />
                </div>
              ) : (
                <div className="text-center">
                  <i className="ri-information-line h3 text-danger"></i>
                  <h5 className="mt-2">{modalText}</h5>
                  {/* <p className="mt-3"></p> */}
                  <div className="card-body p-24">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row m-2">
                        <span className="col-md-6 mt-auto mb-auto fw-bold">
                          Amount to Pay ($)
                        </span>
                        <input
                          type="number"
                          className="h-56-px bg-neutral-50 radius-12 col-md-6"
                          placeholder="Amount"
                          {...register("amount", {
                            required: "Amount is required",
                          })}
                        />
                        {errors.amount && (
                          <div
                            className="col-md-8 text-end"
                            style={{ color: "red" }}
                          >
                            {errors.amount.message}
                          </div>
                        )}
                      </div>
                      
                      <div className="row m-2">
                        <span className="col-md-6 mt-auto mb-auto fw-bold">
                          First Name
                        </span>
                        <input
                          type="text"
                          className="h-56-px bg-neutral-50 radius-12 col-md-6"
                          placeholder="First Name"
                          {...register("first_name", {
                            required: "First Name is required",
                          })}
                        />
                        {errors.first_name && (
                          <div
                            className="col-md-8 text-end"
                            style={{ color: "red" }}
                          >
                            {errors.first_name.message}
                          </div>
                        )}
                      </div>
                      <div className="row m-2">
                        <span className="col-md-6 mt-auto mb-auto fw-bold">
                          Last Name
                        </span>
                        <input
                          type="text"
                          className="h-56-px bg-neutral-50 radius-12 col-md-6"
                          placeholder="Last Name"
                          {...register("last_name", {
                            required: "Last Name is required",
                          })}
                        />
                        {errors.last_name && (
                          <div
                            className="col-md-8 text-end"
                            style={{ color: "red" }}
                          >
                            {errors.last_name.message}
                          </div>
                        )}
                      </div>
                      <div className="row m-2">
                        <span className="col-md-6 mt-auto mb-auto fw-bold">
                          Date of Birth
                        </span>
                        <input
                          type="year"
                          className="h-56-px bg-neutral-50 radius-12 col-md-6"
                          placeholder="Date of Birth"
                          {...register("dob", {
                            required: "DOB is required",
                          })}
                        />
                        {errors.dob && (
                          <div
                            className="col-md-8 text-end"
                            style={{ color: "red" }}
                          >
                            {errors.dob.message}
                          </div>
                        )}
                      </div>

                      {/* <div className="row m-2">
                      <span className="col-md-2 mt-auto mb-auto fw-bold">
                        Cost/Mile ($/mi)
                      </span>
                      <input
                        type="number"
                        className="h-56-px bg-neutral-50 radius-12 col-md-6"
                        placeholder="Cost Per Mile"
                        {...register("costPerMile", {
                          required: "Cost/Mile is required",
                        })}
                      />
                      {errors.costPerMile && (
                        <div
                          className="col-md-8 text-end"
                          style={{ color: "red" }}
                        >
                          {errors.costPerMile.message}
                        </div>
                      )}
                    </div> */}
                      <div className="row m-2">
                        <span className="col-md-6 mt-auto mb-auto fw-bold">
                          Social Security Number
                        </span>
                        <input
                          type="number"
                          className="h-56-px bg-neutral-50 radius-12 col-md-6"
                          placeholder="Social Security (Last 4 characters)"
                          {...register("socialSecurity", {
                            required: "Social Secuirity is required",
                            maxLength: {
                              value: 4,
                              message: "Please Enter Last 4 characters",
                            },
                          })}
                        />
                        {errors.socialSecurity && (
                          <div
                            className="col-md-8 text-end"
                            style={{ color: "red" }}
                          >
                            {errors.socialSecurity.message}
                          </div>
                        )}
                      </div>
                      <div className="row m-2">
                        <span className="col-md-6 mt-auto mb-auto fw-bold">
                          Account Number
                        </span>
                        <input
                          type="number"
                          className="h-56-px bg-neutral-50 radius-12 col-md-6"
                          placeholder="Account Number"
                          {...register("accountNumber", {
                            required: "Account Number is required",
                          })}
                        />
                        {errors.accountNumber && (
                          <div
                            className="col-md-8 text-end"
                            style={{ color: "red" }}
                          >
                            {errors.accountNumber.message}
                          </div>
                        )}
                      </div>
                      <div className="row m-2">
                        <span className="col-md-6 mt-auto mb-auto fw-bold">
                          Routing Number
                        </span>
                        <input
                          type="number"
                          className="h-56-px bg-neutral-50 radius-12 col-md-6"
                          placeholder="Routing Number"
                          {...register("routing_number", {
                            required: "Routing Number is required",
                          })}
                        />
                        {errors.routing_number && (
                          <div
                            className="col-md-8 text-end"
                            style={{ color: "red" }}
                          >
                            {errors.routing_number.message}
                          </div>
                        )}
                      </div>
                      <div className="row m-2">
                        <span className="col-md-6 mt-auto mb-auto fw-bold">
                          IFSC
                        </span>
                        <input
                          type="text"
                          className="h-56-px bg-neutral-50 radius-12 col-md-6"
                          placeholder="IFSC Number"
                          {...register("ifsc", {
                            required: "IFSC Number is required",
                          })}
                        />
                        {errors.ifsc && (
                          <div
                            className="col-md-8 text-end"
                            style={{ color: "red" }}
                          >
                            {errors.ifsc.message}
                          </div>
                        )}
                      </div>
                      <div className="row align-center justify-content-center">
                        <div className="col-md-3">
                          <button
                            type="submit"
                            className="btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"
                          >
                            {" "}
                            Pay
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* <button
                  type="button"
                  className="btn btn-info my-3"
                  data-bs-dismiss="modal"
                  onClick={onDelete}
                >
                  Pay
                </button> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmaPayModal;
