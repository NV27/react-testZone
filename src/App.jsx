import './App.css'
import Places from './components/Places/Places'
import ButtonA from './components/ButtonA/ButtonA'
import Accordian from './components/Accordian/Accordian'
import ButtonB from './components/ButtonB/ButtonB'
import { useEffect, useState } from 'react'
import Modal from './components/Modal/Modal'
import ButtonC from './components/ButtonC/ButtonC'
import { BrowserRouter, Link } from 'react-router-dom'

function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [pokemonData, setPokemonData] = useState(null);
  const [clicks, setClicks] = useState(0);
  const [newText, setNewText] = useState("Don't Click Me!")
  
  const openModal = () => {
    setModalOpen(true);
    console.log("a word")
  }

  useEffect(() => {

    let R2 = Math.floor(Math.random()*700)
    fetch(`https://pokeapi.co/api/v2/pokemon/${R2}`)
    .then(response => response.json())
    .then(data => {
      setPokemonData(data)

      // var moveText = "";

      // pokemonData.moves.forEach((move) => {
      //   moveText += `<span>Moves: </span>{pokemonData?.moves[${move.index}].move.name}`
      // })

    })
    
  }, [clicks])


  useEffect(() => {

    if (clicks > 0){
      if (clicks%5 === 0){
        console.log("oweee!!!");
        setNewText("oweee!!!");
      }
      else{
        console.log("ow!");
        setNewText("ow!");
      }
    }
    else{

    

    }
  }, [clicks])
  
  const clickCounter = () => {
    setClicks(clicks + 1);
  }

  

  return (
    <>
      <BrowserRouter>
      <h1>React Test Zone</h1>
      
      
        
        <Places/>
        <ButtonA defaultClickCount={2}/>
        <ButtonA defaultClickCount={3}/>
        <Accordian content="Hi"/>
        <Accordian content="Hi too"/>
        <ButtonB handleClick={openModal}/>
        <Modal isOpen={modalOpen}/>
        <div>
          <h1>Pokemon data</h1>
          <p><span>Name: </span>{pokemonData?.name ?? 'Loading...'}</p>
          <p><span>ID: </span>{pokemonData?.id ?? 'Loading...'}</p>
          <p><span>Main Ability: </span>{pokemonData?.abilities[0].ability.name ?? 'Loading...'}</p>
          <p><span>Second Ability: </span>{pokemonData?.abilities[1]?.ability.name ?? 'None'}</p>
          <p><span>Hidden Ability: </span>{pokemonData?.abilities[2]?.ability.name ?? 'None'}</p>
          <p><span>Moves: </span>{pokemonData?.moves[0].move.name}, {pokemonData?.moves[1].move.name}, {pokemonData?.moves[2].move.name}, {pokemonData?.moves[3].move.name}</p>
        </div>
        <h2>Button of pain</h2>
        <ButtonC handleClick={clickCounter} text={newText}/>

        <h1>The End of the Page</h1>
      
      </BrowserRouter>
    </>
  )
}

export default App
