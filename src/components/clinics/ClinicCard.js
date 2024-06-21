import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import clinicData from '../../shared/clinicData';
import { Col, Row } from 'react-bootstrap';
import clinic from '../../assets/images/clinic.avif'

const ClinicCard = () => {
  return (
    <Row>
      {clinicData.map((item, index) => (
        <Col lg={3} key={index}>
          <Card className='my-4'>
            <Card.Img variant="top" src={clinic} />
            <Card.Body>
              <Card.Title>{item.clinicianName}</Card.Title>
              <Card.Text>
                <strong>License:</strong> {item.license}<br />
                <strong>Status:</strong> {item.status ? 'Active' : 'Inactive'}<br />
                <strong>Specialty:</strong> {item.specialty}
              </Card.Text>
              <Button className='gradient-btn-orange'>View Details</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ClinicCard;
