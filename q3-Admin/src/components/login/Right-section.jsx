import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logInThunk } from "../../store/thunks/authThunk";
import { showToast } from "../../utils/Toast";

const Rightsection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, user, error } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(logInThunk({ data: { ...data, userType: "SuperAdmin" } }));
  };

  useEffect(() => {
    if (loading === "success") {
      navigate("/dashboard");
      return showToast({
        message: user?.message || "Login Successfully.",
        type: "success",
        durationTime: 3500,
        position: "top-center",
      });
    }
    if (loading === "error") {
      return showToast({
        message: error?.originalError || "Login failed.",
        type: "error",
        durationTime: 3500,
        position: "bottom-center",
      });
    }
  }, [loading, user, error]);

  return (
    <div className="col-md-6 pl_1 d-flex flex-column justify-content-center">
      <div className="auth-right1">
        <div className="max-w-464-px mx-auto w-100">
          <div className="log_logo">
            <Link to="/" className="max-w-290-px">
              <img src="assets/images/logo.png" alt="" />
            </Link>
            <h4 className="mb-12">Sign In to your Account</h4>
            <p className="mb-32 text-secondary-light text-lg">
              Welcome back! please enter your detail
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="icon-field mb-16">
              <span className="icon top-50 translate-middle-y">
                <iconify-icon icon="mage:email"></iconify-icon>
              </span>
              <input
                type="email"
                className="form-control h-56-px bg-neutral-50 radius-12"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <div className="invalid-tooltip" style={{ display: "block" }}>
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className="position-relative mb-20">
              <div className="icon-field">
                <span className="icon top-50 translate-middle-y">
                  <iconify-icon icon="solar:lock-password-outline"></iconify-icon>
                </span>
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  className="form-control h-56-px bg-neutral-50 radius-12"
                  id="your-password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <div className="invalid-tooltip" style={{ display: "block" }}>
                    {errors.password.message}
                  </div>
                )}
              </div>
              <span
                className="toggle-password ri-eye-line cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light"
                data-toggle="#your-password"
                onClick={() => setShowPassword(!showPassword)}
              ></span>
            </div>
            {/* <div className="">
                            <div className="d-flex justify-content-between gap-2">
                                <div className="form-check style-check d-flex align-items-center">
                                    <input className="form-check-input border border-neutral-300" type="checkbox" value="" id="remeber"/>
                                    <label className="form-check-label" for="remeber">Remember me </label>
                                </div>
                                <a href="javascript:void(0)" className="text-primary-600 fw-medium">Forgot Password?</a>
                            </div>
                        </div> */}

            <button
              type="submit"
              className="btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"
            >
              {" "}
              Sign In
            </button>

            {/* <div className="mt-32 text-center text-sm">
              <p className="mb-0">
                Don’t have an account?{" "}
                <Link to="/register" className="text-primary-600 fw-semibold">
                  Sign Up
                </Link>
              </p>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Rightsection;
