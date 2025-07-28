import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Sidebar from "./components/shared/sidebar";
import Topbar from "./components/shared/topbar";
import Dashboard from "./pages/dashboard";

import "./App.css";
import Footer from "./components/shared/footer";
import Customerlist from "./pages/customerlist";
import Header from "./components/shared/header/Header";
import Serviceproviderlist from "./pages/service-provider-list";
import Towingrequestlist from "./pages/towing-request-list/indx";
import Transactionhistorypages from "./pages/tansaction-history";


function App() {

  return (
    <>
      <Sidebar />
      <Topbar />
      <div className="g_mine das_sider">
        
        <Header/>
        {/* <Login/> */}
        {/* <Signup/> */}
        {/* <Dashboard /> */}
        {/* <Customerlist/> */}
        {/* <Serviceproviderlist/> */}
        {/* <Towingrequestlist/> */}
        <Transactionhistorypages/>
      </div>
      <Footer />
    </>
  );
}

export default App;
