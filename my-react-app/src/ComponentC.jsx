import ComponentD from "./ComponentD";

function ComponentC(prop) {
  return (
    <div className="box">
      <h1>ComponentC</h1>
      <ComponentD user={prop.user} />
    </div>
  );
}

export default ComponentC;
