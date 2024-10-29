import Footer from "./Footer";
import Header from "./Header";
import Food from "./Food";
import Card from "./Card";

function App() {
  return (
    <>
      {/* we use fragments to be able to show more than one components */}

      <Header />
      <Food />
      <Card />
      <Card />
      <Card />
      <Footer />
    </>
  );
}
export default App;
