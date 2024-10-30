function Button2() {
  const styles = {
    marginTop: "10px",
    backgroundColor: "red",
    padding: "5px 10px",
    color: "white",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
  };
  const handleClick = () => console.log("OUCH!");

  const handleClick2 = (name) => console.log(`${name} stop clicking me!`);

  let count = 0;
  function handleClick3(name) {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} time/s`);
    } else {
      console.log(`${name} stop clicking me!`);
    }
  }

  return (
    <>
      <button onClick={() => handleClick3("Mccoy")}>Click Me :)</button>
      <br />
      <button style={styles} onClick={() => alert("You Just Clicked me.")}>
        Alert
      </button>
    </>
  );
}

export default Button2;
