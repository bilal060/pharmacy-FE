import React, { useState } from "react";
import SidebarNav from "../shared/SidebarNav";
import TopBar from "../shared/TopBar";
import ErrorBoundary from "../shared/ErrorBoundary";
import ErrorBoundaryAlert from "../shared/ErrorBoundaryAlert";

const MainLayout = (WrappedComponent) => {
  return function MainLayoutHOC(props) {
    const [toggled, setToggled] = useState(false);
    return (
      <div className="main-layout d-block">
        <TopBar setToggled={setToggled} toggled={toggled} />
        <div className="d-flex">
          <SidebarNav setToggled={setToggled} toggled={toggled} />
          <main className="main-container">
            <ErrorBoundary fallback={<ErrorBoundaryAlert />}>
              <WrappedComponent {...props} />
            </ErrorBoundary>
          </main>
        </div>
      </div>
    );
  };
};

export default MainLayout;
