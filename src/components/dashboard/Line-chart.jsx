import React from 'react'

const Linechart = () => {
  return (
    <div className='col-md-6'>

        <div className="card h-100">
          <div className="card-body">
            <div className="d-flex flex-wrap align-items-center justify-content-between">
              <h6 className="text-lg mb-0">Sales Statistic</h6>
              <select className="form-select bg-base form-select-sm w-auto radius-8">
                <option>Yearly</option>
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Today</option>
              </select>
            </div>
            <div className="d-flex flex-wrap align-items-center gap-2 mt-8">
              <h6 className="mb-0">$27,200</h6>
              <span className="text-sm fw-semibold rounded-pill bg-success-focus text-success-main border br-success px-8 py-4 line-height-1 d-flex align-items-center gap-1">
                10% <iconify-icon icon="bxs:up-arrow" className="text-xs"></iconify-icon>
              </span>
              <span className="text-xs fw-medium">+ $1500 Per Day</span>

            </div>

            <div className='img_pi'>
                <img src='assets/images/pi/p1.jpg'/>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Linechart
