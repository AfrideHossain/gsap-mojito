import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

// register gsap plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* temporary div */}
      <div className="min-h-screen"></div>
    </main>
  );
};

export default App;
