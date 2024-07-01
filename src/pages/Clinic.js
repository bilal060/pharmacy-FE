import React from "react";
import MainLayout from "../layout/MainLayout";
import ClinicCard from "../components/clinics/ClinicCard";

const Clinic = () => {
  return (
    <>
      <h4 className="heading">All Clinics </h4>
      <ClinicCard />
    </>
  );
};

export default MainLayout(Clinic);
