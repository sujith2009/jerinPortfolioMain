import Navbar from "./conponents/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
