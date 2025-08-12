import React from 'react'
import { Link } from 'react-router-dom'

const Rightsection = () => {
  return (
    <div className='col-md-6 pl_1 d-flex flex-column justify-content-center'>
        <div className="auth-right1">
            <div className="max-w-464-px mx-auto w-100">
                <div className="log_logo">
                    <a href="index.html" className="max-w-290-px">
                        <img src="assets/images/logo.png" alt=""/>
                    </a>
                    <h4 className="mb-12">Sign Up to your Account</h4>
                    <p className="mb-32 text-secondary-light text-lg">Welcome back! please enter your detail</p>
                </div>
                <form action="#">
                    <div className="icon-field mb-16">
                        <span className="icon top-50 translate-middle-y">
                            <iconify-icon icon="f7:person"></iconify-icon>
                        </span>
                        <input type="text" className="form-control h-56-px bg-neutral-50 radius-12" placeholder="Username"/>
                    </div>
                    <div className="icon-field mb-16">
                        <span className="icon top-50 translate-middle-y">
                            <iconify-icon icon="mage:email"></iconify-icon>
                        </span>
                        <input type="email" className="form-control h-56-px bg-neutral-50 radius-12" placeholder="Email"/>
                    </div>
                    <div className="mb-20">
                        <div className="position-relative ">
                            <div className="icon-field">
                                <span className="icon top-50 translate-middle-y">
                                    <iconify-icon icon="solar:lock-password-outline"></iconify-icon>
                                </span> 
                                <input type="password" className="form-control h-56-px bg-neutral-50 radius-12" id="your-password" placeholder="Password"/>
                            </div>
                            <span className="toggle-password ri-eye-line cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light" data-toggle="#your-password"></span>
                        </div>
                        <span className="mt-12 text-sm text-secondary-light">Your password must have at least 8 characters</span>
                    </div>
                    <div className="">
                        <div className="d-flex justify-content-between gap-2">
                            <div className="form-check style-check d-flex align-items-start">
                                <input className="form-check-input border border-neutral-300 mt-4" type="checkbox" value="" id="condition"/>
                                <label className="form-check-label text-sm" htmlFor="condition">
                                    By creating an account means you agree to the 
                                    <a href="javascript:void(0)" className="text-primary-600 fw-semibold">Terms & Conditions</a> and our 
                                    <a href="javascript:void(0)" className="text-primary-600 fw-semibold">Privacy Policy</a>
                                </label>
                            </div>
                            
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"> Sign Up</button>
                    <div className="mt-32 text-center text-sm">
                        <p className="mb-0">Already have an account? <Link to="/login" className="text-primary-600 fw-semibold">Sign In</Link></p>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Rightsection
