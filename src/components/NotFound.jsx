import React from 'react';
import {Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>No se ha encontrado este recurso!!!</h2>
      <p>
        <Link to="/">Volver al Home</Link>
      </p>
    </div>
  );
}
