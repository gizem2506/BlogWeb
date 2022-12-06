import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Experiences from "./components/Experiences";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Experiences/>
      <Footer/>
      
    
    </div>
  );
}

export default App;

