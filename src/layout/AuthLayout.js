import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ErrorBoundary from "../shared/ErrorBoundary";
import ErrorBoundaryAlert from "../shared/ErrorBoundaryAlert";
import grid from "../assets/images/grid.svg";
import "../assets/css/auth-layout.css";

const AuthLayout = (WrappedComponent) => {
  return function AuthLayoutHoc(props) {
    return (
      <>
        <div className="full-height-section">
          <Container fluid className="p-0">
            <Row className="m-0 h-100">
              <Col xs="12" lg="5" xl="4" className="auth-section-1 py-5 px-0">
                <ErrorBoundary fallback={<ErrorBoundaryAlert />}>
                  <WrappedComponent {...props} />
                </ErrorBoundary>
              </Col>
              <Col
                xs="12"
                lg="7"
                xl="8"
                className="d-lg-block d-none auth-section-2 text-center px-0"
              >
                <Image src={grid} className="h-100 w-100" />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  };
};

export default AuthLayout;
