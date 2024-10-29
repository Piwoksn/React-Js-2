import Footer from "./Footer";
import Header from "./Header";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";

function App() {
  return (
    <>
      {/* we use fragments to be able to show more than one components */}

      <Header />
      <Student name="Noble Piwoks" age={29} isStudent={true} />
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
