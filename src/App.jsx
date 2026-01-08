import Sidebar from "./components/shared/sidebar";
import Topbar from "./components/shared/topbar";
import "./App.css";
import Footer from "./components/shared/footer";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <>
      <Sidebar />
      <Topbar />
      {/* <p style={{fontSize:"300px" ,textAlign: "center"}}> Log Out </p> */}
      <div className="g_mine das_sider" style={{background:'#ffffff'}}>
        <AllRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
