import ComponentC from "./ComponentC";

function ComponentB(prop) {
  return (
    <div className="box">
      <h1>ComponentB</h1>
      <ComponentC user={prop.user} />
    </div>
  );
}

export default ComponentB;
