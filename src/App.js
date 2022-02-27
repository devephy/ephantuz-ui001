import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services'
import Contact from './components/contacts/Contact';
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Contact />
      

      {/* <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer /> */}




    </div>
  );
}

export default App;
