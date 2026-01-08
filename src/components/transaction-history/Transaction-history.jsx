import React from 'react'

const Transactionhistory = () => {
  return (
    <div className="card h-100 p-0 radius-12">
            <div className="pxer">
              <div className="text-end">
                <a href="#" className="btn btn-primary text-sm btn-sm px-12 py-12 radius-8 gap-2 df"> 
                    <iconify-icon icon="ix:download" className="icon text-xl grt line-height-1"></iconify-icon>
                    Download CSV
                </a>
              </div>
            </div>

            <div className="prags_box">
                <h3>Transaction Status</h3>
                <div className="progress bar_box">
                  <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:"30%"}}>
                    <span className="sr-only">30%</span>
                  </div>
                </div>
                <div className="clearfix text_betr">
                  <div className="pending clearfix">
                    <h4 className="p_1">Pending</h4>
                    <h5 className="p_2">$ 175.89</h5>
                  </div>
                  <div className="balance clearfix">
                    <h4 className="p_1">Available Balance</h4>
                    <h5 className="p_2">$ 22623.37</h5>
                  </div>
                </div>
            </div>
            <div className="card-body p-24">
                <div className="table-responsive scroll-sm">
                    <table className="table bordered-table sm-table mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Transaction Id</th>
                          <th scope="col">Type</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Time</th>
                          <th scope="col">Service Type</th>
                          <th scope="col">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>tr_1RnnrdPoaMEmMPRhySLOVY3i</td>
                          <td>credit</td>
                          <td>USD 52</td>
                          <td>23/07/2025, 3:06:45 AM</td>
                          <td>Painting</td>
                          <td>Lead Generation Fee</td>
                        </tr>
                        <tr>
                          <td>tr_1RnnrdPoaMEmMPRhySLOVY3i</td>
                          <td>credit</td>
                          <td>USD 52</td>
                          <td>23/07/2025, 3:06:45 AM</td>
                          <td>Painting</td>
                          <td>Lead Generation Fee</td>
                        </tr>
                        <tr>
                          <td>tr_1RnnrdPoaMEmMPRhySLOVY3i</td>
                          <td>credit</td>
                          <td>USD 52</td>
                          <td>23/07/2025, 3:06:45 AM</td>
                          <td>Painting</td>
                          <td>Lead Generation Fee</td>
                        </tr>
                        <tr>
                          <td>tr_1RnnrdPoaMEmMPRhySLOVY3i</td>
                          <td>credit</td>
                          <td>USD 52</td>
                          <td>23/07/2025, 3:06:45 AM</td>
                          <td>Painting</td>
                          <td>Lead Generation Fee</td>
                        </tr>
                        <tr>
                          <td>tr_1RnnrdPoaMEmMPRhySLOVY3i</td>
                          <td>credit</td>
                          <td>USD 52</td>
                          <td>23/07/2025, 3:06:45 AM</td>
                          <td>Painting</td>
                          <td>Lead Generation Fee</td>
                        </tr>
                        <tr>
                          <td>tr_1RnnrdPoaMEmMPRhySLOVY3i</td>
                          <td>credit</td>
                          <td>USD 52</td>
                          <td>23/07/2025, 3:06:45 AM</td>
                          <td>Painting</td>
                          <td>Lead Generation Fee</td>
                        </tr>
                        <tr>
                          <td>tr_1RnnrdPoaMEmMPRhySLOVY3i</td>
                          <td>credit</td>
                          <td>USD 52</td>
                          <td>23/07/2025, 3:06:45 AM</td>
                          <td>Painting</td>
                          <td>Lead Generation Fee</td>
                        </tr>
                        <tr>
                          <td>tr_1RnnrdPoaMEmMPRhySLOVY3i</td>
                          <td>credit</td>
                          <td>USD 52</td>
                          <td>23/07/2025, 3:06:45 AM</td>
                          <td>Painting</td>
                          <td>Lead Generation Fee</td>
                        </tr>
                        <tr>
                          <td>tr_1RnnrdPoaMEmMPRhySLOVY3i</td>
                          <td>credit</td>
                          <td>USD 52</td>
                          <td>23/07/2025, 3:06:45 AM</td>
                          <td>Painting</td>
                          <td>Lead Generation Fee</td>
                        </tr>
                        <tr>
                          <td>tr_1RnnrdPoaMEmMPRhySLOVY3i</td>
                          <td>credit</td>
                          <td>USD 52</td>
                          <td>23/07/2025, 3:06:45 AM</td>
                          <td>Painting</td>
                          <td>Lead Generation Fee</td>
                        </tr>

                      </tbody>
                    </table>
                </div>

                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mt-24">
                    <span>Showing 1 to 10 of 12 entries</span>
                    <ul className="pagination d-flex flex-wrap align-items-center gap-2 justify-content-center">
                        <li className="page-item">
                            <a className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md" href="javascript:void(0)"><iconify-icon icon="ep:d-arrow-left" className=""></iconify-icon></a>
                        </li>
                        <li className="page-item">
                            <a className="page-link text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md bg-primary-600 text-white" href="javascript:void(0)">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px" href="javascript:void(0)">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md" href="javascript:void(0)">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md" href="javascript:void(0)">4</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md" href="javascript:void(0)">5</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md" href="javascript:void(0)"> <iconify-icon icon="ep:d-arrow-right" className=""></iconify-icon> </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Transactionhistory
