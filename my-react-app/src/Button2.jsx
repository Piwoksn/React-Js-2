function Button2() {
  const handleClick = () => console.log("OUCH!");

  const handleClick2 = (name) => console.log(`${name} stop clicking me!`);

  return <button onClick={() => handleClick2("Mccoy")}>Click Me :)</button>;
}

export default Button2;
