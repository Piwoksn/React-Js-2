function List() {
  const fruits = [
    { name: "Orange", calories: 95 },
    { name: "Apple", calories: 45 },
    { name: "Pineapple", calories: 105 },
    { name: "Coconut", calories: 159 },
    { name: "Banana", calories: 37 },
  ];

  // const listItem = fruits.map((item, index) => {
  //   return (
  //     <ul>
  //       <li key={index}>{item}</li>
  //     </ul>
  //   );
  // });

  // or this
  // fruits.sort(); //sorts the array or list
  // sorting the dictionary
  fruits.sort((a, b) => a.name.localeCompare(b.name)); //sorts teh dictionary

  const listItem = fruits.map((fruit, index) => (
    <li key={index}>
      {fruit.name}: &nbsp;<b>{fruit.calories}</b>
    </li>
  ));
  return <ol> {listItem}</ol>;
}

export default List;
