import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Cocktails from "./components/Cocktails/Cocktails";

// register gsap plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  );
};

export default App;
