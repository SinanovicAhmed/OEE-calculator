import styles from "./Calculator.module.css";
import { useState } from "react";
import scapacitor from "./svgs/series-capacitor.svg";
import pcapacitor from "./svgs/paralel-capacitor.svg";
import sresistor from "./svgs/series-resistor.svg";
import presistor from "./svgs/paralel-resistor.svg";
import plus from "./svgs/plus.svg";
import minus from "./svgs/minus.svg";
const Calculator = (props) => {
  const [link, setLink] = useState("default");
  const [inputFieldNumber, setInputFieldNumber] = useState(2);
  const [result, setResult] = useState(0);
  let inputFields = [];
  for (let i = 2; i < inputFieldNumber; i++) {
    inputFields.push(
      <input type="number" key={i} step=".01" min="0.1" required></input>
    );
  }
  console.log(inputFieldNumber);
  const increaseInputs = (e) => {
    e.preventDefault();
    if (inputFieldNumber < 5) {
      setInputFieldNumber((prevNum) => prevNum + 1);
    }
  };
  const decreaseInputs = (e) => {
    e.preventDefault();
    if (inputFieldNumber > 2) {
      setInputFieldNumber((prevNum) => prevNum - 1);
    }
  };
  const changeLink = (e) => {
    setLink(e.target.value);
  };
  const calculateFunction = (e) => {
    e.preventDefault();

    const element = props.selectedElement;
    let tempResult = 0;
    if (link !== "default") {
      if (element === "Otpornik") {
        if (link === "serijski") {
          for (let i = 0; i < inputFieldNumber; i++) {
            tempResult += Number(e.target[i].value);
          }
          setResult(tempResult);
        } else {
          for (let i = 0; i < inputFieldNumber; i++) {
            tempResult += 1 / Number(e.target[i].value).toFixed(2);
          }
          setResult((1 / tempResult).toFixed(2));
        }
      } else {
        if (link === "paralelni") {
          for (let i = 0; i < inputFieldNumber; i++) {
            tempResult += Number(e.target[i].value);
          }
          setResult(tempResult);
        } else {
          for (let i = 0; i < inputFieldNumber; i++) {
            tempResult += 1 / Number(e.target[i].value).toFixed(2);
          }
          setResult((1 / tempResult).toFixed(2));
        }
      }
    } else {
      window.alert("Odaberite vezu!");
    }
  };
  let element;
  if (props.selectedElement === "default" || link === "default") element = null;
  else if (props.selectedElement === "Otpornik" && link === "serijski")
    element = sresistor;
  else if (props.selectedElement === "Otpornik" && link === "paralelni")
    element = presistor;
  else if (props.selectedElement === "Kondenzator" && link === "paralelni")
    element = pcapacitor;
  else if (props.selectedElement === "Kondenzator" && link === "serijski")
    element = scapacitor;
  return (
    <div className={styles.container}>
      {props.selectedElement === "default" ? (
        <>
          <h2>Kalulator otpornosti i kapacitivnosti</h2>
          <p>Odaberite element da biste počeli!</p>
        </>
      ) : (
        <>
          <select
            name="Odabir spoja"
            id="element"
            onChange={changeLink}
            defaultValue={link}
          >
            <option value="default">Odabir veze</option>
            <option value="serijski">Serijska veza</option>
            <option value="paralelni">Paralelna veza</option>
          </select>
          <img src={element} alt="" />
          <form className={styles.inputFields} onSubmit={calculateFunction}>
            <div className={styles.inputContainer}>
              <input type="number" id={0} step=".01" min="0.1" required></input>
              <input type="number" id={1} step=".01" min="0.1" required></input>
              {inputFields}
            </div>
            <div className={styles.inputButtons}>
              <img src={plus} onClick={increaseInputs} />
              <img src={minus} onClick={decreaseInputs} />
            </div>
            <button>IZRAČUNAJ</button>
          </form>
          <h2>{result} Ω</h2>
        </>
      )}
    </div>
  );
};

export default Calculator;
