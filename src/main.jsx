import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Index from "./pages/Index.jsx";
import PrivateOne from "./routes/PrivateOne.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Signup from "./pages/Signup/index.jsx";
import Login from "./pages/login/index.jsx";
import PublicRouteAccess from "./routes/PublicrouteAccess.jsx";
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route element={<PrivateOne />}>
        <Route path="*" element={<App />} />
      </Route>
      <Route
          path='/login'
          element={
            <PublicRouteAccess>
              <Login />
            </PublicRouteAccess>
          } />
        <Route path='/register' element={<Signup />} />
    </Routes>
  </Router>
    <Toaster
      position='top-center'
      reverseOrder={false}
      gutter={10}
    />
  </Provider>
);
