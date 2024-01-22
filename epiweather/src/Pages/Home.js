import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const [citta, setCitta] = useState({city: ""});

    const navigate = useNavigate()

  return (
    <>
    <h1>Home page</h1>

    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Città</Form.Label>
      <Form.Control 
        value={citta.city}
        type="text" 
        placeholder="Inserici la tua città"
        onChange={(e) => setCitta({...citta, city: e.target.value})} />

      <Form.Text className="text-muted">
        Scopri il Meteo nelle località di tuo interesse
      </Form.Text>
    </Form.Group>

    <Button variant="primary" onClick={() => navigate("/Meteo/" + citta.city)}>
      Cerca
    </Button>
    </Form>
  </>
  )
}
