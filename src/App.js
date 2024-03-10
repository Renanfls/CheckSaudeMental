import About from "./components/About";
import Header from "./components/Header";
import Parceiros from "./components/Parceiros"; 
import SectionVideo from "./components/SectionVideo"; 
import Footer from "./components/Footer"; 
import "./index.css"

export default function App() {
  return (
    <>
      <Header />
      <About />
      <SectionVideo />
      <Parceiros />
      <Footer />
    </>
  );
}
