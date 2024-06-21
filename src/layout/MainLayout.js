import React from "react";
import SidebarNav from "../shared/SidebarNav";
import TopBar from "../shared/TopBar";
import ErrorBoundary from "../shared/ErrorBoundary";
import ErrorBoundaryAlert from "../shared/ErrorBoundaryAlert";

const MainLayout = (WrappedComponent) => {
  return (props) => (
    <>
      <TopBar />
      <div className="page-container">
        <SidebarNav />
        <main className="main-container">
          <ErrorBoundary fallback={<ErrorBoundaryAlert />}>
            <WrappedComponent {...props} />
          </ErrorBoundary>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
