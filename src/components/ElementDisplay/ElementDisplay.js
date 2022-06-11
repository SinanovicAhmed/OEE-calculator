import styles from "./ElementDisplay.module.css";
import resistor from "./svgs/resistor.svg";
import capacitor from "./svgs/capacitor.svg";
import arrow from "./svgs/arrow.svg";
const ElementDisplay = (props) => {
  const element = props.selectedElement === "Otpornik" ? resistor : capacitor;

  return (
    <div className={styles.container}>
      {props.selectedElement !== "default" ? (
        <>
          <h2>{props.selectedElement.toUpperCase()}</h2>
          <img src={element} alt="SVG logo image" />
        </>
      ) : (
        <>
          <img src={arrow} alt="SVG logo image" />
          <h2>{"Odaberite element iznad"}</h2>
        </>
      )}
    </div>
  );
};

export default ElementDisplay;
