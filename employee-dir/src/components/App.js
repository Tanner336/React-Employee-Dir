import './App.css';
import Navbar from "./components/Navbar";
import Footer from './Footer';
import Gallery from "../pages/Gallery"
import Wrapper from "./components/Wrapper";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Wrapper>
        <Gallery />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
