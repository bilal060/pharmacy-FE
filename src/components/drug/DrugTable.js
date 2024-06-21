import React from 'react'
import { Table } from 'react-bootstrap'
import DrugsData from '../../shared/drugData'


const DrugTable = () => {
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>familyCode</th>
        <th>ddcCode</th>
        <th>DohRpoCode</th>
        <th>fullName</th>
        <th>ingredient</th>
        <th>strength</th>
        <th>gender</th>
        <th>ageTo</th>
        <th>ageFrom</th>
        <th>maxDD</th>
        <th>ddcPrice</th>
        <th>rpoPrice</th>
      </tr>
    </thead>
    <tbody>
      {DrugsData.map((item, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.familyCode}</td>
          <td>{item.ddcCode}</td>
          <td>{item.DohRpoCode}</td>
          <td>{item.fullName}</td>
          <td>{item.ingredient}</td>
          <td>{item.strength}</td>
          <td>{item.gender}</td>
          <td>{item.ageTo}</td>
          <td>{item.ageFrom}</td>
          <td>{item.maxDD}</td>
          <td>{item.ddcPrice}</td>
          <td>{item.rpoPrice}</td>
        </tr>
      ))}
    </tbody>
  </Table>
  )
}

export default DrugTable