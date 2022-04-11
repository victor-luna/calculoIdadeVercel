import "./App.css";
import React, { useState } from "react";

function App() {
  const [age, setAge] = useState();

  const [ageCalculator, setAgeCalculator] = useState();

  const [isChecked, setIsChecked] = useState(false);

  const [disable, setDisable] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleAgeInput = (event) => {
    setAge(parseInt(event.target.value));
  };

  const handleClick = () => {
    setDisable(true);
    if (isChecked == true) {
      setAgeCalculator(new Date().getFullYear() - age);
    } else {
      setAgeCalculator(new Date().getFullYear() - age - 1);
    }
  };

  const handleClickClear = () => {
    setDisable(false);
    setAgeCalculator("");
    setAge("");
  };

  return (
    <div>
      <h2>Cálculo do Ano de Nascimento</h2>
      <div>
        Digite sua idade:
        <input
          type="number"
          value={age}
          onChange={handleAgeInput}
          readOnly={disable}
        />
      </div>

      <div>
        <input type="checkbox" checked={isChecked} onChange={handleOnChange} />
        Já fiz aniversário esse ano!
      </div>
      <div>
        <button onClick={handleClick} disabled={disable}>
          Calcular
        </button>
        <button onClick={handleClickClear}>Limpar</button>
        <br />
        <br />
      </div>
      <div>
        Ano de nascimento:
        <input type="number" value={ageCalculator} readOnly />
      </div>
    </div>
  );
}

export default App;
