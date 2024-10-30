import Footer from "./Footer";
import Header from "./Header";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";

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
      <List items={fruits} category="Fruits" />
      <List items={vegetables} category="Vegetables" />

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
