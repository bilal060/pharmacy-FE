import React from 'react'
import MainLayout from '../layout/MainLayout'
import DashboardCard from '../components/home/DashboardCard'
import { Col, Row} from 'react-bootstrap';
import DrugIcon from '../assets/icons/DrugIcon';
import ClinicIcon from '../assets/icons/ClinicIcon';
import UserIcon from '../assets/icons/UserIcon';
import DrugTable from '../components/drug/DrugTable';


const data = [
  {
    icon:DrugIcon,
    description: 200,
    title: 'Total Drugs',
    cardColor: '#347FA6'
  },
  {
    icon:ClinicIcon,
    description: 50,
    title: 'Total Clinics',
    cardColor: '#18445E'
  },
  {
    icon:UserIcon,
    description:100,
    title: 'Total Users',
    cardColor: '#0F3145'
  },
];
const Home = () => {
  return (
    <>
    
    <Row>
    {data.map((item, index) => {
      return (
        <Col key={index} xs="12" md="6" xl="4">
          <DashboardCard
            icon={item.icon}
            title={item.title}
            description={item.description}
            cardColor={item.cardColor}
          />
        </Col>
      );
    })}
    </Row>
    <div className='my-4'>
    <DrugTable/>
    </div>
   
    </>
  )
}

export default MainLayout(Home)