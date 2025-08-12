import React from 'react'

const BarclassName = () => {
  return (
    <div className='col-md-3'>
      <div className="card h-100 radius-8 border">
          <div className="card-body p-24">
              <h6 className="mb-12 fw-semibold text-lg mb-16">Total Subscriber</h6>
              <div className="d-flex align-items-center gap-2 mb-20">
                  <h6 className="fw-semibold mb-0">5,000</h6>
                  <p className="text-sm mb-0">
                      <span className="bg-danger-focus border br-danger px-8 py-2 rounded-pill fw-semibold text-danger-main text-sm d-inline-flex align-items-center gap-1">
                          10%
                          <iconify-icon icon="iconamoon:arrow-down-2-fill" className="icon"></iconify-icon>  
                      </span> 
                    - 20 Per Day 
                  </p>
              </div>

              <div className='img_pi'>
                <img src='assets/images/pi/p2.jpg'/>
              </div>
            
          </div>
        </div>
    </div>
  )
}

export default BarclassName
