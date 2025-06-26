import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

// register gsap plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-violet-500">Hello GSAP</h1>
    </div>
  );
};

export default App;
