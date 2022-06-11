import styles from "./Navbar.module.css";

const Navbar = (props) => {
  const changeElement = (e) => {
    props.elementChange(e.target.value);
  };
  return (
    <div className={styles.container}>
      <h2>OEE-kalkulator kapacitivnosti i otpornosti</h2>
      <select name="Odabir elemenata" id="element" onChange={changeElement}>
        <option value="default">Odaberite element</option>
        <option value="Otpornik">Otpornik</option>
        <option value="Kondenzator">Kondenzator</option>
      </select>
    </div>
  );
};
export default Navbar;
