import Transactionhistory from '../../components/transaction-history/Transaction-history'
import Header from '../../components/shared/header/Header'

const Transactionhistorypages = () => {
  return (
    <div>
      <Header heading="Transactions" subHeading="list"/>

      <Transactionhistory/>
    </div>
  )
}

export default Transactionhistorypages
