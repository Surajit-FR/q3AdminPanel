import React from "react";

const Transactionhistory = ({ transactionDetails }) => {
  return (
    <div className="card h-100 p-0 radius-12">
      <div className="pxer">
        <div className="text-end">
          <a
            href="#"
            className="btn btn-primary text-sm btn-sm px-12 py-12 radius-8 gap-2 df"
          >
            <iconify-icon
              icon="ix:download"
              className="icon text-xl grt line-height-1"
            ></iconify-icon>
            Download CSV
          </a>
        </div>
      </div>

      <div className="prags_box">
        {/* <h3>Transaction Status</h3>
        <div className="progress bar_box">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "30%" }}
          >
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
        </div> */}
      </div>
      <div className="card-body p-24">
        <div className="table-responsive scroll-sm">
          <table className="table bordered-table sm-table mb-0">
            <thead>
              <tr>
                <th scope="col">Transaction Id</th>
                <th scope="col">Paid By</th>
                <th scope="col">Received By</th>
                <th scope="col">Amount</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              {transactionDetails && transactionDetails.length > 0
                ? transactionDetails.map((transaction) => (
                    <tr key={transaction?._id}>
                      <td>{transaction?.paymentIntentId}</td>
                      <td>{transaction?.paidBy}</td>
                      <td>{transaction?.receivedBy}</td>
                      <td>{`USD ${transaction?.towing_cost}`}</td>
                      <td>{new Date(transaction?.paidAt).toLocaleString()}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
        {/* <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mt-24">
          <span>
            Showing{" "}
            {(serviceRequestList?.pagination?.page - 1) * itemsPerpage + 1} to{" "}
            {serviceRequestList?.pagination?.page * itemsPerpage >=
            serviceRequestList?.pagination?.total
              ? serviceRequestList?.pagination?.total
              : serviceRequestList?.pagination?.page * itemsPerpage}{" "}
            of {serviceRequestList?.pagination?.total} entries
          </span>
          <Pagination
            activePage={page}
            itemsCountPerPage={itemsPerpage}
            totalItemsCount={serviceRequestList?.pagination?.total || 0}
            pageRangeDisplayed={itemsPerpage}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Transactionhistory;
