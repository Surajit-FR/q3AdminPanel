import CostingDetailPages from "../../components/costing-detail/Costing-detail-pages";
import Header from "../../components/shared/header/Header";

const index = () => {
  return (
    <div>
      <Header heading="Costing" subHeading="details" />

      <CostingDetailPages />
    </div>
  );
};

export default index;
