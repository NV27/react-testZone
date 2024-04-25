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
import InfiniteSquaring from './components/InfiniteSquaring/InfiniteSquaring'

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
          <Link to="/InfiniteSquaring"><button>Infinite Squaring</button></Link>
          <Link to="/Accordian1"><button>Accordian 1</button></Link>
          <Link to="/Accordian2"><button>Accordian 2</button></Link>
          {/* <Link to="/Modal">Modal</Link> */}
          <Link to="/PokemonInfo"><button>Pokemon Generator</button></Link>
        </div>
        

        <Routes>
          <Route path="/Places" element={<Places/>}/>
          <Route path="/PokemonInfo" element={<PokemonInfo/>}/>
          <Route path="/InfiniteSquaring" element={<InfiniteSquaring/>}/>
          <Route path="/Accordian1" element={<Accordian content="Hi"/>}/>
          <Route path="/Accordian2" element={<Accordian content="Hi too" l="open too"/>}/>
        </Routes>

        {/* <ButtonB handleClick={openModal}/>
        <Modal isOpen={modalOpen}/> */}

        {/* <h3>The End of the Page</h3> */}
      
      </BrowserRouter>
    </>
  )
}

export default App
