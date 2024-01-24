import { useContext, useEffect, useRef } from "react";
import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineShoppingBag,
} from "react-icons/md";
import "./sidebar.css";
import { SidebarContext } from "../context/SidebarContext";
// import { logo } from "../../Images/users-alt.png";

const Sidebar = () => {
  //   const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);

  // closing the navbar when clicked outside the sidebar area
  /* const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      navbarRef.current.contains(event.target) &&      add !
      event.target.className !== "sidebar-oepn-btn"
    ) {
      closeSidebar();
    }
  };
  */

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [navbarRef, closeSidebar]);

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img
            className="sidebarLogo"
            src="../../Images/ubuntu.png"
            alt="logo"
            width={25}
            height={25}
          />
          <span className="sidebar-brand-text">FUND FLOW 360</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <a href="/" className="menu-link active">
                <span className="menu-link-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlinePeople size={20} />
                </span>
                <span className="menu-link-text">Customers</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineBarChart size={20} />
                </span>
                <span className="menu-link-text">Vendors</span>
              </a>
            </li>

            <li className="menu-item">
              <a href="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineShoppingBag size={20} />
                </span>
                <span className="menu-link-text">Goods/Services</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineSettings size={20} />
                </span>
                <span className="menu-link-text">Settings</span>
                <div
                  class="dropdown-arrow"
                  style={{ marginLeft: "40px" }}
                ></div>
              </a>
            </li>
            <li className="menu-item">
              <a href="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineAttachMoney size={20} />
                </span>
                <span className="menu-link-text">Reports</span>
                <div
                  class="dropdown-arrow"
                  style={{ marginLeft: "40px" }}
                ></div>
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            <li className="menu-item">
              <a href="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineSettings size={20} />
                </span>
                <span className="menu-link-text">Settings</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text">Logout</span>
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Sidebar;
