
import Customerlistpages from '../../components/customer-list/Customer-list-pages'
import Header from '../../components/shared/header/Header'

const Customerlist = () => {

  return (
    <div>
      <Header heading="Customers" subHeading="list"/>

      <Customerlistpages/>
    </div>
  )
}

export default Customerlist
