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
  const listItem = fruits.map((item) => <li>{item}</li>);
  return <ul> {listItem}</ul>;
}

export default List;
