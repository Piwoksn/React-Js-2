function List() {
  const fruits = ["Orange", "Apple", "Pineapple", "Coconut", "Banana"];

  const listItem = fruits.map((item, index) => {
    return (
      <ul>
        <li key={index}>{item}</li>
      </ul>
    );
  });
  return listItem;
}

export default List;
