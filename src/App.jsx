import Faq from "./components/Faq";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";

const App = () => {
  return (
    <div className="bg-[#C0C0C0] space-y-10">
      <Faq />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default App;
