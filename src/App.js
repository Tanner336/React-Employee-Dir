import './App.css';
import Footer from './components/Footer';
import Gallery from "./pages/Gallery"
import Wrapper from "./components/Wrapper";



function App() {
  return (
    <div className="App">
      <Wrapper>
        <Gallery/>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
