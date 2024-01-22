import React from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
    <h1>Pagina non trovata</h1>
    <i class="fa-solid fa-cloud-bolt fs-1"></i>
    <p>Sembra tu abbia cercato una pagina che non esiste</p>
    <Link className='nav-link mt-4 mb-5' to="/">
        <Button variant="primary" href="/">Torna alla Homepage</Button>
    </Link>
    </>
  )
}
