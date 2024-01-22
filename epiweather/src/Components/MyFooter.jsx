import React from "react";
import { Card } from 'react-bootstrap';

function MyFooter() {
  return (
    <Card className="myfooter">
      <Card.Header>EpiWeather</Card.Header>
      <Card.Body>
        <Card.Title>App Meteo test di Epicode</Card.Title>
        <Card.Text>
          Test settimanale di Luca Di Muro
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyFooter;
