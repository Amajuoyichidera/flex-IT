import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from '../src/components/home/Home';
import About from '../src/components/about/About';
import Service from '../src/components/service/Service';
import Contact from '../src/components/contact/Contact';
import Navbar from './components/Navbar';
import Footer from './components/home/footer/Footer';

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/service' element={ <Service /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='*' element={ <h1>NOT A PAGE</h1> } />
        </Routes>
       </Router>
       <Footer />
    </div>
  );
}

export default App;
