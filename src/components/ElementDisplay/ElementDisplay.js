import styles from "./ElementDisplay.module.css";
import resistor from "./svgs/resistor.svg";
import capacitor from "./svgs/capacitor.svg";
import arrow from "./svgs/arrow.svg";
import { motion } from "framer-motion";
const ElementDisplay = (props) => {
  const element = props.selectedElement === "Otpornik" ? resistor : capacitor;

  return (
    <div className={styles.container}>
      {props.selectedElement !== "default" ? (
        <motion.div
          className={styles.center}
          key={element}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2>{props.selectedElement.toUpperCase()}</h2>
          <img src={element} alt="SVG logo image" />
        </motion.div>
      ) : (
        <motion.div
          className={styles.center}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.img
            animate={{ y: 10, transition: { duration: 0.3, yoyo: Infinity } }}
            src={arrow}
            alt="SVG logo image"
          />
          <h2>{"Odaberite element iznad"}</h2>
        </motion.div>
      )}
    </div>
  );
};

export default ElementDisplay;
