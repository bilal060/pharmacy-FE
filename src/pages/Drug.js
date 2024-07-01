import React from "react";
import MainLayout from "../layout/MainLayout";
import DrugTable from "../components/drug/DrugTable";

const Drug = () => {
  return (
    <>
      <h4 className="heading">All Drugs</h4>
      <div className="my-4">
        <DrugTable />
      </div>
    </>
  );
};

export default MainLayout(Drug);
