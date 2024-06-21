import React from 'react'
import MainLayout from '../layout/MainLayout'
import ClinicCard from '../components/clinics/ClinicCard';



const Clinic = () => {
  return (
    <>
        <h1>All Clinics</h1>
        <ClinicCard/>
    </>

  )
}

export default MainLayout(Clinic)