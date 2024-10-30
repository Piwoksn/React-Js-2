function List() {
  const fruits = ["Orange", "Apple", "Pineapple", "Coconut", "Banana"];

  // const listItem = fruits.map((item, index) => {
  //   return (
  //     <ul>
  //       <li key={index}>{item}</li>
  //     </ul>
  //   );
  // });

  // or this
  fruits.sort(); //sorts the array or list
  const listItem = fruits.map((item) => <li>{item}</li>);
  return <ol> {listItem}</ol>;
}

export default List;
