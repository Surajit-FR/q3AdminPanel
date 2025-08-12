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
      <div className="g_mine das_sider">
        <AllRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
