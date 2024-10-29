import Footer from "./Footer";
import Header from "./Header";
import Food from "./Food";

function App() {
  return (
    <>
      {/* we use fragments to be able to show more than one components */}

      <Header />
      <Food />
      <Footer />
    </>
  );
}
export default App;
