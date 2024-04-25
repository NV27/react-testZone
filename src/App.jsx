import './App.css'
import Places from './components/Places/Places'
import ButtonA from './components/ButtonA/ButtonA'
import Accordian from './components/Accordian/Accordian'
import ButtonB from './components/ButtonB/ButtonB'
import { useEffect, useState } from 'react'
import Modal from './components/Modal/Modal'
import ButtonC from './components/ButtonC/ButtonC'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import PokemonInfo from './components/PokemonInfo/PokemonInfo'

function App() {

  const [modalOpen, setModalOpen] = useState(false);
  
  const openModal = () => {
    setModalOpen(true);
    console.log("a word")
  }

  return (
    <>
      <BrowserRouter>
      <h1>React Test Zone</h1>
      
        <div className='links'>
          <Link to="/Places"><button>Random Place Zone</button></Link>
          {/* <Link to="/ButtonA">Infinite Squaring</Link>
          <Link to="/Accordian">Accordian</Link>
          <Link to="/Modal">Modal</Link> */}
          <Link to="/PokemonInfo"><button>Pokemon Generator</button></Link>
        </div>
        

        <Routes>
          <Route path="/Places" element={<Places/>}/>
          <Route path="/PokemonInfo" element={<PokemonInfo/>}/>
        </Routes>
        
        <div>
          <ButtonA defaultClickCount={2}/>
          <ButtonA defaultClickCount={3}/>
        </div>

        <Accordian content="Hi"/>
        <Accordian content="Hi too"/>
        <ButtonB handleClick={openModal}/>
        <Modal isOpen={modalOpen}/>
        

        <h1>The End of the Page</h1>
      
      </BrowserRouter>
    </>
  )
}

export default App
