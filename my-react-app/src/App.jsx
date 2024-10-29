import Footer from "./Footer";
import Header from "./Header";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      {/* we use fragments to be able to show more than one components */}

      <Header />
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
