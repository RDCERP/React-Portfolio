import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Map from './Components/Map';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';


function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header></Header>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Portfolio></Portfolio>
            <ContactForm></ContactForm>


          </>
        ) : (
          <div>
            
          </div>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
