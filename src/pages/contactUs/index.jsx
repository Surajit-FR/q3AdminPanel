
import ContactUsListPage from "../../components/contactUs/contactUsList";
import Header from "../../components/shared/header/Header";

const index = () => {
  return (
    <div>
      <Header heading="Queries" subHeading="All" />
      <ContactUsListPage/>
    </div>
  );
};

export default index;
