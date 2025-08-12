import React from 'react'

const PieclassName = () => {
  return (
    <div className='col-md-3'>
      <div className="card h-100 radius-8 border-0 overflow-hidden">
          <div className="card-body p-24">
            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
              <h6 className="mb-2 fw-bold text-lg">Users Overview</h6>
              <div className="">
                <select className="form-select form-select-sm w-auto bg-base border text-secondary-light radius-8">
                  <option>Today</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Yearly</option>
                </select>
              </div>
            </div>


            <div className='img_pi'>
                <img src='assets/images/pi/p3.jpg'/>
            </div>

            <ul className="d-flex flex-wrap align-items-center justify-content-between mt-3 gap-3">
              <li className="d-flex align-items-center gap-2">
                  <span className="w-12-px h-12-px radius-2 bg-primary-600"></span>
                  <span className="text-secondary-light text-sm fw-normal">New: 
                      <span className="text-primary-light fw-semibold">500</span>
                  </span>
              </li>
              <li className="d-flex align-items-center gap-2">
                  <span className="w-12-px h-12-px radius-2 bg-yellow"></span>
                  <span className="text-secondary-light text-sm fw-normal">Subscribed:  
                      <span className="text-primary-light fw-semibold">300</span>
                  </span>
              </li>
            </ul>
            
          </div>
        </div>
    </div>
  )
}

export default PieclassName
