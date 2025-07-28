import React from 'react'

const Serviceprovider = () => {
  return (
    <div className="card h-100 p-0 radius-12">
            <div className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between">
                <div className="d-flex align-items-center flex-wrap gap-3">
                    <span className="text-md fw-medium text-secondary-light mb-0">Show</span>
                    <select className="form-select form-select-sm w-auto ps-12 py-6 radius-12 h-40-px">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                    <form className="navbar-search">
                        <input type="text" className="bg-base h-40-px w-auto" name="search" placeholder="Search"/>
                        <iconify-icon icon="ion:search-outline" className="icon"></iconify-icon>
                    </form>
                    
                </div>
                <a href="add-user.html" className="btn btn-primary text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2"> 
                    <iconify-icon icon="ix:download" className="icon text-xl line-height-1"></iconify-icon>
                    Download CSV
                </a>
            </div>
            <div className="card-body p-24">
                <div className="table-responsive scroll-sm">
                    <table className="table bordered-table sm-table mb-0">
                      <thead>
                        <tr>
                          <th scope="col">
                            <div className="d-flex align-items-center gap-10">
                                S.L
                            </div>
                          </th>
                          <th scope="col">Join Date</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Department</th>
                          <th scope="col">Designation</th>
                          <th scope="col" className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                              <div className="d-flex align-items-center gap-10">
                                01
                              </div>
                          </td>
                          <td>25 Jan 2024</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src="assets/images/user-list/user-list1.png" alt="" className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"/>
                              <div className="flex-grow-1">
                                <span className="text-md mb-0 fw-normal text-secondary-light">Kathryn Murphy</span>
                              </div>
                            </div>
                          </td>
                          <td><span className="text-md mb-0 fw-normal text-secondary-light">osgoodwy@gmail.com</span></td>
                          <td>HR</td>
                          <td>Manager</td>
                          <td className="text-center"> 
                            <div className="d-flex align-items-center gap-10 justify-content-center">
                                <button type="button" className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"> 
                                    <iconify-icon icon="majesticons:eye-line" className="icon text-xl"></iconify-icon>
                                </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                              <div className="d-flex align-items-center gap-10">
                                02
                              </div>
                          </td>
                          <td>25 Jan 2024</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src="assets/images/user-list/user-list1.png" alt="" className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"/>
                              <div className="flex-grow-1">
                                <span className="text-md mb-0 fw-normal text-secondary-light">Kathryn Murphy</span>
                              </div>
                            </div>
                          </td>
                          <td><span className="text-md mb-0 fw-normal text-secondary-light">osgoodwy@gmail.com</span></td>
                          <td>HR</td>
                          <td>Manager</td>
                          <td className="text-center"> 
                            <div className="d-flex align-items-center gap-10 justify-content-center">
                                <button type="button" className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"> 
                                    <iconify-icon icon="majesticons:eye-line" className="icon text-xl"></iconify-icon>
                                </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                              <div className="d-flex align-items-center gap-10">
                                03
                              </div>
                          </td>
                          <td>25 Jan 2024</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src="assets/images/user-list/user-list1.png" alt="" className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"/>
                              <div className="flex-grow-1">
                                <span className="text-md mb-0 fw-normal text-secondary-light">Kathryn Murphy</span>
                              </div>
                            </div>
                          </td>
                          <td><span className="text-md mb-0 fw-normal text-secondary-light">osgoodwy@gmail.com</span></td>
                          <td>HR</td>
                          <td>Manager</td>
                          <td className="text-center"> 
                            <div className="d-flex align-items-center gap-10 justify-content-center">
                                <button type="button" className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"> 
                                    <iconify-icon icon="majesticons:eye-line" className="icon text-xl"></iconify-icon>
                                </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                              <div className="d-flex align-items-center gap-10">
                                04
                              </div>
                          </td>
                          <td>25 Jan 2024</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src="assets/images/user-list/user-list1.png" alt="" className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"/>
                              <div className="flex-grow-1">
                                <span className="text-md mb-0 fw-normal text-secondary-light">Kathryn Murphy</span>
                              </div>
                            </div>
                          </td>
                          <td><span className="text-md mb-0 fw-normal text-secondary-light">osgoodwy@gmail.com</span></td>
                          <td>HR</td>
                          <td>Manager</td>
                          <td className="text-center"> 
                            <div className="d-flex align-items-center gap-10 justify-content-center">
                                <button type="button" className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"> 
                                    <iconify-icon icon="majesticons:eye-line" className="icon text-xl"></iconify-icon>
                                </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                              <div className="d-flex align-items-center gap-10">
                                05
                              </div>
                          </td>
                          <td>25 Jan 2024</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src="assets/images/user-list/user-list1.png" alt="" className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"/>
                              <div className="flex-grow-1">
                                <span className="text-md mb-0 fw-normal text-secondary-light">Kathryn Murphy</span>
                              </div>
                            </div>
                          </td>
                          <td><span className="text-md mb-0 fw-normal text-secondary-light">osgoodwy@gmail.com</span></td>
                          <td>HR</td>
                          <td>Manager</td>
                          <td className="text-center"> 
                            <div className="d-flex align-items-center gap-10 justify-content-center">
                                <button type="button" className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"> 
                                    <iconify-icon icon="majesticons:eye-line" className="icon text-xl"></iconify-icon>
                                </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                              <div className="d-flex align-items-center gap-10">
                                06
                              </div>
                          </td>
                          <td>25 Jan 2024</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src="assets/images/user-list/user-list1.png" alt="" className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"/>
                              <div className="flex-grow-1">
                                <span className="text-md mb-0 fw-normal text-secondary-light">Kathryn Murphy</span>
                              </div>
                            </div>
                          </td>
                          <td><span className="text-md mb-0 fw-normal text-secondary-light">osgoodwy@gmail.com</span></td>
                          <td>HR</td>
                          <td>Manager</td>
                          <td className="text-center"> 
                            <div className="d-flex align-items-center gap-10 justify-content-center">
                                <button type="button" className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"> 
                                    <iconify-icon icon="majesticons:eye-line" className="icon text-xl"></iconify-icon>
                                </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                              <div className="d-flex align-items-center gap-10">
                                07
                              </div>
                          </td>
                          <td>25 Jan 2024</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src="assets/images/user-list/user-list1.png" alt="" className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"/>
                              <div className="flex-grow-1">
                                <span className="text-md mb-0 fw-normal text-secondary-light">Kathryn Murphy</span>
                              </div>
                            </div>
                          </td>
                          <td><span className="text-md mb-0 fw-normal text-secondary-light">osgoodwy@gmail.com</span></td>
                          <td>HR</td>
                          <td>Manager</td>
                          <td className="text-center"> 
                            <div className="d-flex align-items-center gap-10 justify-content-center">
                                <button type="button" className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"> 
                                    <iconify-icon icon="majesticons:eye-line" className="icon text-xl"></iconify-icon>
                                </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                              <div className="d-flex align-items-center gap-10">
                                08
                              </div>
                          </td>
                          <td>25 Jan 2024</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src="assets/images/user-list/user-list1.png" alt="" className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"/>
                              <div className="flex-grow-1">
                                <span className="text-md mb-0 fw-normal text-secondary-light">Kathryn Murphy</span>
                              </div>
                            </div>
                          </td>
                          <td><span className="text-md mb-0 fw-normal text-secondary-light">osgoodwy@gmail.com</span></td>
                          <td>HR</td>
                          <td>Manager</td>
                          <td className="text-center"> 
                            <div className="d-flex align-items-center gap-10 justify-content-center">
                                <button type="button" className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"> 
                                    <iconify-icon icon="majesticons:eye-line" className="icon text-xl"></iconify-icon>
                                </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                              <div className="d-flex align-items-center gap-10">
                                09
                              </div>
                          </td>
                          <td>25 Jan 2024</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src="assets/images/user-list/user-list1.png" alt="" className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"/>
                              <div className="flex-grow-1">
                                <span className="text-md mb-0 fw-normal text-secondary-light">Kathryn Murphy</span>
                              </div>
                            </div>
                          </td>
                          <td><span className="text-md mb-0 fw-normal text-secondary-light">osgoodwy@gmail.com</span></td>
                          <td>HR</td>
                          <td>Manager</td>
                          <td className="text-center"> 
                            <div className="d-flex align-items-center gap-10 justify-content-center">
                                <button type="button" className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"> 
                                    <iconify-icon icon="majesticons:eye-line" className="icon text-xl"></iconify-icon>
                                </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                              <div className="d-flex align-items-center gap-10">
                                10
                              </div>
                          </td>
                          <td>25 Jan 2024</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src="assets/images/user-list/user-list1.png" alt="" className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"/>
                              <div className="flex-grow-1">
                                <span className="text-md mb-0 fw-normal text-secondary-light">Kathryn Murphy</span>
                              </div>
                            </div>
                          </td>
                          <td><span className="text-md mb-0 fw-normal text-secondary-light">osgoodwy@gmail.com</span></td>
                          <td>HR</td>
                          <td>Manager</td>
                          <td className="text-center"> 
                            <div className="d-flex align-items-center gap-10 justify-content-center">
                                <button type="button" className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"> 
                                    <iconify-icon icon="majesticons:eye-line" className="icon text-xl"></iconify-icon>
                                </button>
                            </div>
                          </td>
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

export default Serviceprovider
