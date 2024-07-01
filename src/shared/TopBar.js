import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import "../assets/css/topbar.css";
import UserIcon from "../assets/images/user.png";
import Logo from "../components/logo/Logo";
import MenuBarIcon from "../assets/icons/MenuBar";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../store/user/actions/actionCreators";
import { useNavigate } from "react-router-dom";

const TopBar = ({ toggled, setToggled }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userType = useSelector((state) => state?.user?.user?.user?.role);

  return (
    <Row className="py-3 px-4 m-0 topbar">
      <Col className="logoIcon">
        <Logo />
      </Col>

      <button
        className="toggle-button d-sm-none w-max-content"
        onClick={() => setToggled(!toggled)}
      >
        <MenuBarIcon />
      </button>
      <Col className="d-sm-flex d-none align-items-center justify-content-end">
        <div className="bar-icons">
          <Dropdown className="user-dropdown">
            <Dropdown.Toggle
              className="dropbtn-style"
              id="dropdown-menu-align-end"
            >
              <div className="d-flex justify-content-between align-items-center gap-3">
                <div className="d-md-block text-end d-none">
                  <p className="text-16 fw-bold mb-1 text-capitalize text-light">
                    User Name
                  </p>
                  <p className="font-12 line-100 grey font-weight-500 m-0 text-light">
                    Admin
                  </p>
                </div>
                <Image
                  fluid
                  src={UserIcon}
                  alt="Logo"
                  loading="lazy"
                  xs="12"
                  md="6"
                  className="rounded-circle user-image"
                />
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item
                onClick={() => dispatch(userLogout(navigate, userType))}
              >
                <Button className="bg-transparent border-0 text-dark p-0 d-flex align-items-center gap-2">
                  Logout
                </Button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Col>
    </Row>
  );
};

export default TopBar;
