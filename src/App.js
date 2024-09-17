import React from 'react';
import TarotForm from './TarotForm';
import TarotResult from './TarotResult';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';  // Importa el archivo CSS

function App() {
  const [result, setResult] = React.useState(null);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Calculadora de Personalidad con Tarot</h1>
      <TarotForm setResult={setResult} />
      {result && <TarotResult result={result} />}
    </div>
  );
}

export default App;
