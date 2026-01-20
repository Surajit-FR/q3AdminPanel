import { getMonth } from "../../utils/dateParser"

const EmailTemplateBody
 = () => {
  return (

<div className="row invoice">
  <div className="col-md-3 invoice-aside">
    <div className="invoice-logo"></div>
    <div className="invoice-data">
      <div className="invoice-person"><span className="name">Kristopher Donny</span>
      <span className="position">+1 9876543210</span>
      <span>donny@designer.co</span>
      </div>
      <div className="invoice-payment-direction"><i className="icon s7-angle-down-circle"></i></div>
      <div className="invoice-person"><span className="name">Elliot Mark</span><span className="position">SP of Q3 Car</span><span>ceoblx@company.co</span>
      <span>United States</span></div>
      <div className="invoice-company-info">
        <div className="summary"><span className="title">Q3 Car and Truck Repair, LLC</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="phone">
          <ul className="list-unstyled">
            <li>+1(535)-8999278</li>
            <li>+1(656)-3558302</li>
          </ul>
        </div>
        <div className="email">
          <ul className="list-unstyled">
            <li>maisonette@company.co</li>
            <li>maisonette@support.co</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-9 invoice-content">
    <div className="row invoice-header">
      <div className="col-6 invoice-title"><span>Invoice</span></div>
      <div className="col-6 invoice-order"><span className="invoice-number">Number 2308</span><span className="invoice-date">{getMonth(new Date().getMonth())} {new Date().getDate()}, {new Date(Date.now()).getFullYear()}</span></div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <table className="invoice-details">
          <thead>
            <tr>
              <th style={{width:"60%"}}>Description</th>
              <th className="hours" style={{width:"17%"}}>Hours</th>
              <th className="amount" style={{width:"15%"}}>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="description">Towing service from pick up location to destination location </td>
              <td className="hours">60</td>
              <td className="amount">$4,200.00</td>
            </tr>
          </tbody>
        </table>
        <table className="invoice-details">
          <thead>
            <tr>
              <th style={{width:"60%"}}>Subtotal</th>
              <th className="hours" style={{width:"17%"}}></th>
              <th className="amount" style={{width:"15%"}}>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="description"></td>
              <td className="hours"></td>
              <td className="amount">$4,200.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="invoice-payment-details">
          <p><b>Payment Method:</b> Credit card</p>
          <p><b>Card type:</b> Mastercard</p>
          <p><b>Number verification:</b> 4256981387</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 invoice-message mt-5 mb-5 mt-sm-6 mb-sm-6"><span className="title mb-4">Thank you for contacting us!</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis massa nisl. Sed fringilla turpis id mi ultrices, et faucibus ipsum aliquam.</p>
      </div>
    </div>
    <div className="row invoice-footer">
      <div className="col-md-12">
        <button className="btn btn-space btn-secondary">Edit</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default EmailTemplateBody