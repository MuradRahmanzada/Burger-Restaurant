import BestBurger from "./component/BestBurger/BestBurger";
import BigBurger from "./component/BigBurger/BigBurger";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import OurChef from "./component/OurChef/OurChef";
import Package from "./component/Package/Package";
import Quote from "./component/Quote/Quote";
import Statistics from "./component/Statistics/Statistics";
import Subscribe from "./component/Subscribe/Subscribe";

function App() {
  return (
    <div>
      <Hero />
      <OurChef />
      <BestBurger />
      <BigBurger/>
      <Statistics/>
      <Package/>
      <Quote/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
