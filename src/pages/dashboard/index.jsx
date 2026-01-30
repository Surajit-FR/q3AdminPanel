import React, { useEffect, useState } from "react";
import Kpicard from "../../components/dashboard/Kpicard";
import Header from "../../components/shared/header/Header";
import Linechart from "../../components/dashboard/line-chart";
import Barchart from "../../components/dashboard/Bar-chart";
import Piechart from "../../components/dashboard/Pie-chart";
import Registeredtable from "../../components/dashboard/Registered-table";
import Performercard from "../../components/dashboard/Performer-card";
import Topcountries from "../../components/dashboard/Top-countries";
import { useDispatch, useSelector } from "react-redux";
import { dashboardKPIDataThunk, dashboardPerformerDataThunk } from "../../store/thunks/dashboardThunk";
import { useNavigate } from "react-router-dom";
import { customerThunk } from "../../store/thunks/customerthunk";
import { serviceProviderListThunk } from "../../store/thunks/serviceProviderThunk";
import Spinner from 'react-bootstrap/Spinner';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { customerList } = useSelector((state) => state.customer);
  const { dashboardKPIData, dashboardPerformerData } = useSelector((state) => state.dashboard);
  const { serviceProviderList } = useSelector((state) => state.serviceProvider);

  const navigation = useNavigate();
  const [activeTab, setActiveTab] = useState("customer-list");

  const changeActiveTabStatus = (tabString) => {
    setActiveTab(tabString);
    // navigation(`/${tabString}`)
  };

  const customNavigation = (navString) => {
    navigation(navString);
  };

  useEffect(() => {
    dispatch(dashboardKPIDataThunk());
  }, [dispatch]);
  useEffect(() => {
    dispatch(dashboardPerformerDataThunk());
  }, [dispatch]);
  useEffect(() => {
    dispatch(
      customerThunk({
        data: {
          page: 1,
          limit: 6,
          query: "",
        },
      })
    );
  }, [dispatch]);
  useEffect(() => {
    dispatch(
      serviceProviderListThunk({
        data: {
          page: 1,
          limit: 6,
          query: "",
        },
      })
    );
  }, [dispatch]);
 

  return (
    <div className="das_sider">
      <Header heading="Dashboard" subHeading="AI" />
      <Kpicard kpidata={dashboardKPIData} navigateTo={customNavigation} />
      <div className="row mt-3">
        {/* <Linechart />
        <Barchart />
        <Piechart /> */}
      </div>
      <div className="row mt-3">
        <Registeredtable
          navigateTo={customNavigation}
          changeActiveTabStatus={changeActiveTabStatus}
          activeTab={activeTab}
          customerList={customerList}
          serviceProviderList={serviceProviderList}
        />
        <Performercard performerData={dashboardPerformerData} />
      </div>

      <div className="row mt-3">
        {/* <Topcountries /> */}
      </div>
    </div>
  );
};

export default Dashboard;
