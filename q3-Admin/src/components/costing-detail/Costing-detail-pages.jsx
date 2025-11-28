import React from 'react'

const CostingDetailPages = () => {
  return (
      <div className="card h-100 p-0 radius-12">
      <div className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between">
       Cost Management
   
      </div>
      <div className="card-body p-24">
      <h3>Basic Fee</h3>
      <input type="number"/>
      <h3>Initial distance</h3>
      <input type="number"/>
      <h3>Cost per mile</h3>
      <input type="number"/>
      <h3>Additional Costs</h3>
      <input type="number"/>
      </div>
    </div>

)
}

export default CostingDetailPages