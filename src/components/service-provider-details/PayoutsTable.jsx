import { makeTotalAmountCalculation } from "../../utils/SumAmount";

const PayoutsTable = ({ allPayouts }) => {

    const total = (collections)=>{
          if(collections && collections?.data && collections.data?.length > 0){
             const subtotal =  collections.data.map(coll=>coll.amount)        
             return makeTotalAmountCalculation(subtotal)
          }
          return 0
      }
  return (
    <>
       <div className="row">
      <p className="fw-bold mb-3 me-2 text-decoration-underline col-md-4">Payouts</p>
      <p className="fw-bold mb-3 me-2 text-decoration-underline col-md-6 text-end text-danger-main">Total :  ${total(allPayouts)}</p>
     </div>
      <div className="card-body p-24">
        <div className="table-responsive scroll-sm">
          <table className="table bordered-table sm-table mb-0">
            <thead>
              <tr>
                <th scope="col">Payout Id</th>
                <th scope="col">Stripe Account Id</th>
                <th scope="col">Transfer Id</th>
                <th scope="col">Amount</th>
                <th scope="col">Time</th>
              </tr>
            </thead>

            <tbody>
              {allPayouts && allPayouts?.data && allPayouts.data?.length > 0 ? (
                allPayouts.data.map((pay, key) => (
                  <tr key={pay?.payoutId}>
                    <td>{pay?.payoutId}</td>
                    <td>{pay?.stripeAccountId}</td>
                    <td>{pay?.transferId}</td>
                    <td>
                      {pay?.currency} {pay?.amount}
                    </td>
                    <td>{new Date(pay?.createdAt).toLocaleString()}</td>
                  </tr>
                ))
              ) : (
                <p className="d-flex m-2 text-center">No Payouts Found</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PayoutsTable;
