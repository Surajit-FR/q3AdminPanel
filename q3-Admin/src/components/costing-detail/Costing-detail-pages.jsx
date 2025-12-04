import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  costingThunk,
  costingContactThunk,
  editCostingThunk,
  editCostingContactThunk,
} from "../../store/thunks/costingThunk";

const CostingDetailPages = () => {
  const dispatch = useDispatch();
  const { costingDetails, loading, contactLoading, contactnumber } =
    useSelector((state) => state.costings);
  const [initialState, setInitialState] = useState({});
  const [costingContactNumber, setCostingContactNumber] = useState("");
  const [invalidContact, setInvalidContact] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialState,
  });

  const onSubmit = (data) => {
    console.log({ data });
    dispatch(editCostingThunk({ priceRuleId: costingDetails?._id, data }));
  };

  const onContactSubmit = (e) => {
    e.preventDefault();
    if(!costingContactNumber){
      setInvalidContact(true)
      return
    }
    dispatch(editCostingContactThunk({priceRuleId:contactnumber?._id, data:{contactNumber:costingContactNumber}}))
  };

  useEffect(() => {
    dispatch(costingThunk());
  }, [dispatch]);
  useEffect(() => {
    dispatch(costingContactThunk());
  }, [dispatch]);

  useEffect(() => {
    if (loading === "success") {
      setInitialState(costingDetails);
    }
  }, [loading]);
  useEffect(() => {
    if (contactLoading === "success") {
      console.log("triggered");

      setCostingContactNumber(contactnumber?.contactNumber);
    }
  }, [contactLoading]);

  useEffect(() => {
    if (initialState) {
      reset({
        additionalFee: initialState?.additionalFee,
        baseFee: initialState?.baseFee,
        costPerMile: initialState?.costPerMile,
        includedMiles: initialState?.includedMiles,
      }); // Reset the form with fetched data once available
    }
  }, [initialState, reset]);
  return (
    <div className="card h-100 p-0 radius-12">
      <div className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between fw-bold">
        Cost Management for Light vehicles
      </div>
      <div className="card-body p-24">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row m-2">
            <span className="col-md-2 mt-auto mb-auto fw-bold">
              Basic Fee ($)
            </span>
            <input
              type="number"
              className="h-56-px bg-neutral-50 radius-12 col-md-6"
              placeholder="Base Amount"
              {...register("baseFee", {
                required: "Base Fee is required",
              })}
            />
            {errors.baseFee && (
              <div className="col-md-8 text-end" style={{ color: "red" }}>
                {errors.baseFee.message}
              </div>
            )}
          </div>
          <div className="row m-2">
            <span className="col-md-2 mt-auto mb-auto fw-bold">
              Included Miles (mi)
            </span>
            <input
              type="number"
              className="h-56-px bg-neutral-50 radius-12 col-md-6"
              placeholder="Included Miles"
              {...register("includedMiles", {
                required: "Included Miles is required",
              })}
            />
            {errors.includedMiles && (
              <div className="col-md-8 text-end" style={{ color: "red" }}>
                {errors.includedMiles.message}
              </div>
            )}
          </div>

          <div className="row m-2">
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
              <div className="col-md-8 text-end" style={{ color: "red" }}>
                {errors.costPerMile.message}
              </div>
            )}
          </div>
          <div className="row m-2">
            <span className="col-md-2 mt-auto mb-auto fw-bold">
              Additional Fees ($)
            </span>
            <input
              type="number"
              className="h-56-px bg-neutral-50 radius-12 col-md-6"
              placeholder="Additional Fees"
              {...register("additionalFee", {
                required: "Additional Fee is required",
              })}
            />
            {errors.additionalFee && (
              <div className="col-md-8 text-end" style={{ color: "red" }}>
                {errors.additionalFee.message}
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
                Update Price
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between fw-bold">
        For Heavy Vehicles
      </div>
      <form onSubmit={onContactSubmit} className="card-body p-24">
        <div className="row m-2">
          <span className="col-md-2 mt-auto mb-auto fw-bold">
            Contact Number
          </span>
          <input
            type="tel"
            className="h-56-px bg-neutral-50 radius-12 col-md-6"
            placeholder="Contact Number"
            value={costingContactNumber}
            onChange={(e) => setCostingContactNumber(e.target.value)}
          />
            {invalidContact && (
              <div className="col-md-8 text-end" style={{ color: "red" }}>
                Contact Number is Required
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
              Update Contact
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CostingDetailPages;
