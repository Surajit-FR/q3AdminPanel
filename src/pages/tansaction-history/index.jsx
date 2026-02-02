import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Transactionhistory from "../../components/transaction-history/Transaction-history";
import Header from "../../components/shared/header/Header";
import { transactionListThunk } from "../../store/thunks/transactionsThunk";

const Transactionhistorypages = () => {
  const dispatch = useDispatch();
  const { transactionDetails, loading } = useSelector(
    (state) => state.transaction,
  );
  const [query, setQuery] = useState("");
   const [itemsPerpage, setperPage] = useState(10);
   const [page, setpage] = useState(1);

  useEffect(() => {
    dispatch(
      transactionListThunk({
        data: {
          query,
          // page,
          // limit: itemsPerpage,
        },
      }),
    );
  }, [dispatch, query, page, itemsPerpage]);

  return (
    <div>
      <Header heading="Transactions" subHeading="list" />

      <Transactionhistory
        transactionDetails={transactionDetails}
        loading={loading}
        setQuery={setQuery}
        setperPage={setperPage}
        setpage={setpage}
        page={page}
        itemsPerpage={itemsPerpage}
      />
    </div>
  );
};

export default Transactionhistorypages;
