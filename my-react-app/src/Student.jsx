function Student(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "True" : "False"}</p>
    </div>
  );
}

export default Student;
