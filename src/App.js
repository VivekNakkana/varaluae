import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Section2 from "./sections/Section2";
import Section3Left from "./sections/Section3Left";
import Section3Right from "./sections/Section3Right";
import Section4 from "./sections/Section4";
import Section6Left from "./sections/Section6Left";
import Section6Right from "./sections/Section6Right";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Section2/>
      <div className="flex lg:flex-row flex-col gap-32 mt-32 mx-44 " >
        <Section3Left/>
        <Section3Right/>
      </div>
      <Section4/>
      <Pricing/>
      <div className=" flex flex-col lg:flex-row items-center lg:justify-center mt-44 gap-32" >
        <Section6Left/>
        <Section6Right/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
