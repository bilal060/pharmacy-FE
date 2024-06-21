import React from 'react'
import MainLayout from '../layout/MainLayout'
import DrugTable from '../components/drug/DrugTable';



const Drug = () => {
  return (
    <>
      <h1>All Drugs</h1>
      <div className='my-4'>
      <DrugTable />
      </div>
    </>

  )
}

export default MainLayout(Drug)