import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import { Works } from './components/Works';
import { Reviews } from './components/Reviews';
import Service from './components/Service';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Header/>
      <Hero/>
      <Clients/>
      <Works/>
      <Reviews/>
      <Service/>
    </div>
  )
}

export default App
