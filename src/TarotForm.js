import React, { useState } from 'react';
import Mago from './components/Mago';
import Sacerdotisa from './components/Sacerdotisa';
import Emperatriz from './components/Emperatriz';
import Emperador from './components/Emperador';
import Hierofante from './components/Hierofante';
import Enamorados from './components/Enamorados';
import Carro from './components/Carro';
import Justicia from './components/Justicia';
import Ermitano from './components/Ermitano';
import RuedaFortuna from './components/RuedaFortuna';
import Fuerza from './components/Fuerza';
import Colgado from './components/Colgado';
import Muerte from './components/Muerte';
import Templanza from './components/Templanza';
import Diablo from './components/Diablo';
import Torre from './components/Torre';
import Estrella from './components/Estrella';
import Luna from './components/Luna';
import Sol from './components/Sol';
import Juicio from './components/Juicio';
import Mundo from './components/Mundo';
import Loco from './components/Loco';

const TarotForm = ({ setResult }) => {
  const [birthdate, setBirthdate] = useState('');

  const tarotCards = {
    1: Mago(),
    2: Sacerdotisa(),
    3: Emperatriz(),
    4: Emperador(),
    5: Hierofante(),
    6: Enamorados(),
    7: Carro(),
    8: Justicia(),
    9: Ermitano(),
    10: RuedaFortuna(),
    11: Fuerza(),
    12: Colgado(),
    13: Muerte(),
    14: Templanza(),
    15: Diablo(),
    16: Torre(),
    17: Estrella(),
    18: Luna(),
    19: Sol(),
    20: Juicio(),
    21: Mundo(),
    22: Loco(),
  };

  const sumDigits = (number) => number.toString().split('').reduce((acc, num) => acc + Number(num), 0);

  const calculateTarot = (event) => {
    event.preventDefault();
    if (!birthdate) return;

    const [year, month, day] = birthdate.split('-').map(Number);
    let total = sumDigits(day) + sumDigits(month) + sumDigits(year);

    if (total > 22) {
      total = sumDigits(total);
    }

    const card = tarotCards[total];
    const result = {
      image: card ? card.image : '',
      description: card ? card.description : 'No se encontró la carta.',
      calculationProcess: `Proceso de cálculo: ${day} (${sumDigits(day)}) + ${month} (${sumDigits(month)}) + ${year} (${sumDigits(year)}) = ${total}`
    };

    setResult(result);
  };

  return (
    <form className="form-group" onSubmit={calculateTarot}>
      <label htmlFor="birthdate">Fecha de Nacimiento:</label>
      <input
        type="date"
        id="birthdate"
        className="form-control"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-primary mt-3">Calcular</button>
    </form>
  );
};

export default TarotForm;
