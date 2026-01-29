import { makeTotalAmountCalculation } from '../../utils/SumAmount';

const CollectionTransaction = ({allCollections}) => {
    const total = (collections)=>{
        if(collections && collections.length>0){
           const subtotal =  collections.map(coll=>coll.towing_cost)
           return makeTotalAmountCalculation(subtotal)
        }
        return 0
    }
  return (
     <>
     <div className="row">
      <p className="fw-bold mb-3 me-2 text-decoration-underline col-md-4">All Collected Amounts</p>
      <p className="fw-bold mb-3 me-2 text-decoration-underline col-md-6 text-end text-success-main">Total :  ${total(allCollections)}</p>
     </div>
      <div className="card-body p-24">
        <div className="table-responsive scroll-sm">
          <table className="table bordered-table sm-table mb-0">
            <thead>
              <tr>
                <th scope="col">Paid By</th>
                <th scope="col">Payment Intent Id</th>
                <th scope="col">Collected Amount</th>
                <th scope="col">Time</th>
              </tr>
            </thead>

            <tbody>
              {allCollections && allCollections?.length > 0 ? (
                allCollections.map((pay, key) => (
                  <tr key={pay?._id}>
                    <td>{pay?.paidBy}</td>
                    <td>{pay?.paymentIntentId}</td>
                    <td>${pay?.towing_cost}</td>
                    <td>{new Date(pay?.paidAt).toLocaleString()}</td>
                  </tr>
                ))
              ) : (
                <p className="d-flex m-2 text-center">No Collection Data Found</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default CollectionTransaction