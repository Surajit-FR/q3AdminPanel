import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true); // Always open on desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar when clicking outside (on mobile)
  const handleOverlayClick = () => {
    if (isMobile) setIsOpen(false);
  };
  useEffect(() => {
    const bodyElement = document.querySelector(".das_sider");
    const footerElement = document.querySelector(".d-footer");
    if (isOpen && bodyElement && footerElement) {
      bodyElement.style.marginLeft = "312px";
      footerElement.style.marginLeft = "312px";
    } else {
      bodyElement ? (bodyElement.style.marginLeft = "80px") : null;
      footerElement ? (footerElement.style.marginLeft = "80px") : null;
    }
  }, [isOpen]);
  return (
    <>
      <aside
        className={
          isMobile
            ? `sidebar ${isOpen ? "open" : ""}`
            : isOpen
            ? "sidebar"
            : "sidebar collapsed"
        }
        style={{ position: "fixed" }}
      >
        <div className="sidebar-header">
          <a href="#" className="sidebar-logo">
            <img
              src="/assets/images/logo.png"
              alt="site logo"
              className="light-logo"
            />
          </a>
        </div>
        <nav className="nav_bar_menu">
          <Link
            to="/dashboard"
            className={`nav-item ${
              location.pathname === "/dashboard" ? "active" : ""
            }`}
          >
            {/* <a href="/" className="nav-item active"> */}
            <iconify-icon
              icon="solar:home-smile-angle-bold"
              className="menu-icon nav-icon"
            ></iconify-icon>
            <span className="nav-text">Dashboard</span>
            {/* </a>
             */}
          </Link>
          <Link
            to="/customer-list"
            className={`nav-item ${
              location.pathname === "/customer-list" ? "active" : ""
            }`}
          >
            <iconify-icon
              icon="solar:user-check-bold-duotone"
              class="menu-icon nav-icon"
            ></iconify-icon>
            <span className="nav-text">Customer List</span>
          </Link>
          <Link
            to="/costings"
            className={`nav-item ${
              location.pathname === "/costings" ? "active" : ""
            }`}
          >
            <iconify-icon
              icon="solar:document-text-bold-duotone"
              class="menu-icon nav-icon"
            ></iconify-icon>
            <span className="nav-text">Costings</span>
          </Link>
          <Link
            to="/service-provider-list"
            className={`nav-item ${
              location.pathname === "/service-provider-list" ? "active" : ""
            }`}
          >
            <iconify-icon
              icon="solar:user-hand-up-bold-duotone"
              class="menu-icon nav-icon"
            ></iconify-icon>
            <span className="nav-text">Service Provider List</span>
          </Link>
          <Link
            to="/service-request-list"
            className={`nav-item ${
              location.pathname === "/service-request-list" ? "active" : ""
            }`}
          >
            <iconify-icon
              icon="heroicons-solid:truck"
              class="menu-icon nav-icon"
            ></iconify-icon>
            <span className="nav-text">Towing Request List</span>
          </Link>
          <Link
            to="/transactions"
            className={`nav-item ${
              location.pathname === "/transactions" ? "active" : ""
            }`}
          >
            <iconify-icon
              icon="foundation:dollar"
              class="menu-icon nav-icon"
            ></iconify-icon>
            <span className="nav-text">Transaction History</span>
          </Link>
          {/* <Link to="/email-template" className={`nav-item ${location.pathname === '/email-template'? 'active': ''}`}>
            <iconify-icon
              icon="foundation:mail"
              class="menu-icon nav-icon"
            ></iconify-icon>
            <span className="nav-text">Receipt</span>
          </Link> */}
        </nav>
      </aside>

      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div className="sidebar-overlay" onClick={handleOverlayClick}></div>
      )}

      <main
        className={
          isMobile
            ? "main-content"
            : isOpen
            ? "main-content"
            : "main-content collapsed"
        }
      >
        {/* <button onClick={toggle} className="toggle-btn">
          <iconify-icon
            icon="heroicons:bars-3-solid"
            className="icon"
          ></iconify-icon>
        </button> */}
      </main>
    </>
  );
}
