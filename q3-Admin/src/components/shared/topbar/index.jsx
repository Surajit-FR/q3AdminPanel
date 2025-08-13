import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  const onLogOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="topbar_1">
      <ul className="profiles_1">
        {/* <li>
                <div className='icon_list'></div>
            </li>
            <li>
                <div className='icon_list'></div>
            </li>
            <li>
                <div className='icon_list'></div>
            </li>
            <li>
                <div className='icon_list'></div>
            </li> */}
        {/* <li>
                <div className='icon_list'></div>
            </li> */}
        <div class="dropdown">
          <button
            class="btn btn-outlined dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="d-flex align-items-center">
              <img
                src={"assets/images/user.png"}
                alt=""
                className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
              />
              <p className="m-0">Super Admin</p>
            </div>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li onClick={onLogOut}>
              <Link to="#" class="dropdown-item">
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Topbar;
