import React from 'react';

function TarotResult({ result }) {
  return (
    <div className="mt-5">
      <h2>Tu Carta del Tarot:</h2>
      <img src={result.image} className="img-fluid" alt="Imagen de la carta del tarot" />
      <p>{result.description}</p>
      <p>{result.calculationProcess}</p>
    </div>
  );
}

export default TarotResult;
