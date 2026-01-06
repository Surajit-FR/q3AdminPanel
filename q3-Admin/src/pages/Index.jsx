import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/shared/header/Header";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div>
      <Header heading="Service Requests" subHeading="list" />

      {/* <Serviceprovider /> */}
    </div>
  );
};

export default Index;
