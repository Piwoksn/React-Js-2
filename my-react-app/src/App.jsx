import Footer from "./Footer";
import Header from "./Header";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import Button2 from "./Button2";
import ProfilePicture from "./ProfilePicture";
import MyComponent from "./myComponent";
import Counter from "./Counter";
import OnChangeEvent from "./Onchanged";
import ColorPicker from "./ColorPicker";
import UpdaterFunction from "./UpdaterFunction";
import UpdaterFunction2 from "./UpdaterFunction2";
import FoodList from "./FoodList";
import ListCars from "./CarList";
import ToDoList from "./ToDo";
import UseEffect from "./useEffects";
import Continuation from "./WidthAndHeightOfWindow";
import DigitalClock from "./DigitalClock";

function App() {
  const fruits = [
    { name: "Orange", calories: 95 },
    { name: "Apple", calories: 45 },
    { name: "Pineapple", calories: 105 },
    { name: "Coconut", calories: 159 },
    { name: "Banana", calories: 37 },
  ];
  const vegetables = [
    { name: "Potato", calories: 110 },
    { name: "Celery", calories: 15 },
    { name: "Carrots", calories: 25 },
    { name: "Corn", calories: 63 },
    { name: "broccoli", calories: 50 },
  ];
  return (
    <>
      {/* we use fragments to be able to show more than one components */}

      <Header />
      <DigitalClock />
      <Continuation />
      <br />
      <br />
      <br />
      <UseEffect />

      <ToDoList />

      <ListCars />

      <FoodList />

      <UpdaterFunction2 />
      <UpdaterFunction />
      <ColorPicker />

      <OnChangeEvent />
      <Counter />

      <MyComponent />

      <br />
      <ProfilePicture />
      <Button2 />

      {/* {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetables.length > 0 ? (
        <List items={vegetables} category="Vegetables" />
      ) : null} */}
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}

      <UserGreeting isLoggedIn={true} username="mccoy@gmail.com" />
      <UserGreeting />

      <Student name="Noble Piwoks" age={29} isStudent={false} />
      <Student name="Patrick" age={20} isStudent={true} />
      <Student name="Sunshine" age={32} isStudent={true} />
      <Student />
      <Button />
      <Food />
      <Card />
      <Card />
      <Card />

      <Footer />
    </>
  );
}
export default App;
