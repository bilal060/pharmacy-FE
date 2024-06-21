import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/sidebar-nav.css';
import useWindowDimensions from '../hooks/useWindowDimensions';
import HomeIcon from '../assets/icons/HomeIcon';
import DrugIcon from '../assets/icons/DrugIcon';
import ClinicIcon from '../assets/icons/ClinicIcon';
import UserIcon from '../assets/icons/UserIcon';
import SettingIcon from '../assets/icons/SettingIcon';

const SidebarNav = () => {
  const location = useLocation();
  return (
    <Sidebar
      defaultCollapsed={useWindowDimensions()}
      width="270px"
      collapsedWidth="65px"
      backgroundColor="#418BAF"
      className="main-navigation">
      <Menu className="mt-4 gap-2">
        <MenuItem
          component={<Link to="/home" className="menu-item-link" />}
          active={location.pathname === '/home' && true}>
          <span className="menu-icon">
            <HomeIcon width='25px' height='25px' />
          </span>
          Home
        </MenuItem>
        <MenuItem
          component={<Link to="/drug" className="menu-item-link" />}
          active={location.pathname === '/drug' && true}>
          <span className="menu-icon">
            <DrugIcon width='25px' height='25px' />
          </span>
          All Drugs
        </MenuItem>
        <MenuItem
          component={<Link to="/clinic" className="menu-item-link" />}
          active={location.pathname === '/clinic' && true}>
          <span className="menu-icon">
            <ClinicIcon width='25px' height='25px'/>
          </span>
          All Clinics
        </MenuItem>
        <MenuItem
          component={<Link to="/user" className="menu-item-link" />}
          active={location.pathname === '/user' && true}>
          <span className="menu-icon">
            <UserIcon width='25px' height='25px' />
          </span>
          All Users
        </MenuItem>
        <MenuItem
          component={<Link to="/dashboard/my-managers" className="menu-item-link" />}
          active={location.pathname === '/dashboard/my-managers' && true}>
          <span className="menu-icon">
            <SettingIcon width='25px' height='25px' />
          </span>
          Setting
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarNav;
