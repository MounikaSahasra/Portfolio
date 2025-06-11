import React from 'react';
import Card from 'react-bootstrap/Card';

const EducationCard = ({ title, institution, year, grade }) => {
  return (
    <Card className="shadow-lg p-3 rounded mb-5">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="college mb-0">{institution}</Card.Text>
        <Card.Text className="year mb-3">{year}</Card.Text>
        <Card.Text className="grade mb-1">{grade}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EducationCard;
