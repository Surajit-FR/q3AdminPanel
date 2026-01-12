import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Transactionhistory from "../../components/transaction-history/Transaction-history";
import Header from "../../components/shared/header/Header";
import { transactionListThunk } from "../../store/thunks/transactionsThunk";

const Transactionhistorypages = () => {
  const dispatch = useDispatch();
  const { transactionDetails } = useSelector((state) => state.transaction);

  useEffect(() => {
    dispatch(transactionListThunk());
  }, [dispatch]);

  console.log({ transactionDetails });

  return (
    <div>
      <Header heading="Transactions" subHeading="list" />

      <Transactionhistory transactionDetails={transactionDetails} />
    </div>
  );
};

export default Transactionhistorypages;
