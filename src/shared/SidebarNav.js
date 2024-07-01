import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/sidebar-nav.css";
import useWindowDimensions from "../hooks/useWindowDimensions";
import HomeIcon from "../assets/icons/HomeIcon";
import DrugIcon from "../assets/icons/DrugIcon";
import ClinicIcon from "../assets/icons/ClinicIcon";
import UserIcon from "../assets/icons/UserIcon";
import SettingIcon from "../assets/icons/SettingIcon";
import Logo from "../components/logo/Logo";

const SidebarNav = ({ toggled, setToggled }) => {
  const location = useLocation();
  return (
    <Sidebar
      onBackdropClick={() => setToggled(false)}
      toggled={toggled}
      breakPoint="sm"
      defaultCollapsed={useWindowDimensions()}
      width="265px"
      collapsedWidth="65px"
      className="main-navigation"
      backgroundColor="#418BAF"
    >
      <Menu className="px-3 mt-4 d-sm-none">
        <Logo />
      </Menu>

      <Menu className="mt-4 gap-2">
        <MenuItem
          component={<Link to="/home" className="menu-item-link" />}
          active={location.pathname === "/home" && true}
        >
          <span className="menu-icon">
            <HomeIcon width="25px" height="25px" />
          </span>
          <span className="menu-text">Home</span>
        </MenuItem>
        <MenuItem
          component={<Link to="/drug" className="menu-item-link" />}
          active={location.pathname === "/drug" && true}
        >
          <span className="menu-icon">
            <DrugIcon width="25px" height="25px" />
          </span>
          <span className="menu-text">All Drugs</span>
        </MenuItem>
        <MenuItem
          component={<Link to="/clinic" className="menu-item-link" />}
          active={location.pathname === "/clinic" && true}
        >
          <span className="menu-icon">
            <ClinicIcon width="25px" height="25px" />
          </span>
          <span className="menu-text">All Clinics</span>
        </MenuItem>
        <MenuItem
          component={<Link to="/user" className="menu-item-link" />}
          active={location.pathname === "/user" && true}
        >
          <span className="menu-icon">
            <UserIcon width="25px" height="25px" />
          </span>
          <span className="menu-text">All Users</span>
        </MenuItem>
        <MenuItem
          component={
            <Link to="/dashboard/my-managers" className="menu-item-link" />
          }
          active={location.pathname === "/dashboard/my-managers" && true}
        >
          <span className="menu-icon">
            <SettingIcon width="25px" height="25px" />
          </span>
          <span className="menu-text">Setting</span>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarNav;
