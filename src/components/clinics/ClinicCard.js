import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import clinicData from "../../shared/clinicData";
import { Col, Row } from "react-bootstrap";
import clinic from "../../assets/images/clinic.avif";

const ClinicCard = () => {
  return (
    <Row>
      {clinicData.map((item, index) => (
        <Col xxl={3} md={4} sm={6} key={index}>
          <Card className="mb-4">
            <Card.Img variant="top" src={clinic} />
            <Card.Body>
              <Card.Title className="cut-text">{item.clinicianName}</Card.Title>
              <Card.Text className="mb-2">
                <strong>License:</strong> {item.license}
              </Card.Text>
              <Card.Text className="mb-2">
                <strong>Status:</strong> {item.status ? "Active" : "Inactive"}
              </Card.Text>
              <Card.Text className="cut-text">
                <strong>Specialty:</strong> {item.specialty}
              </Card.Text>

              <Button className="gradient-btn-orange h-25">View Details</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ClinicCard;
