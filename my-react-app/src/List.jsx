function List(props) {
  const category = props.category;

  const itemList = props.items.map((item, index) => (
    <li key={index}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));

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
  // fruits.sort((a, b) => a.name.localeCompare(b.name)); //sorts the dictionary Alphabetical
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); //sorts the dictionary Reverse Alphabetical
  // fruits.sort((a, b) => a.calories - b.calories); //sorts the dictionary by calories
  // fruits.sort((a, b) => b.calories - a.calories); //sorts the dictionary by Reversed calories

  // creating an array with low calories

  // const lowCalFruit = fruits.filter((fruit) => fruit.calories < 100);

  //
  // const listItem = itemList.map((item, index) => (
  //   <li key={index}>
  //     {item.name}: &nbsp;<b>{item.calories}</b>
  //   </li>
  // ));

  // return <ol> {listItem}</ol>;
  return (
    <>
      {" "}
      <h3 className="list-category">{props.category}</h3>
      <ol className="list-items"> {itemList}</ol>;
    </>
  );
}

List.defaultProps = {
  category: "Category",
};
export default List;
