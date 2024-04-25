import ButtonC from "../ButtonC/ButtonC"
import { useEffect, useState } from 'react'

function PokemonInfo() {

    const [pokemonData, setPokemonData] = useState(null);
    const [clicks, setClicks] = useState(0);
    const [newText, setNewText] = useState("Don't Click Me!")

    useEffect(() => {

        let R2 = Math.floor(Math.random()*700)
        fetch(`https://pokeapi.co/api/v2/pokemon/${R2}`)
        .then(response => response.json())
        .then(data => {
          setPokemonData(data)
    
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

    return(
        <div>
        <div>
            <h1>Pokemon data</h1>
            <p><span>Name: </span>{pokemonData?.name ?? 'Loading...'}</p>
            <p><span>ID: </span>{pokemonData?.id ?? 'Loading...'}</p>
            <p><span>Main Ability: </span>{pokemonData?.abilities[0]?.ability?.name ?? 'Loading...'}</p>
            <p><span>Second Ability: </span>{pokemonData?.abilities[1]?.ability?.name ?? 'None'}</p>
            <p><span>Hidden Ability: </span>{pokemonData?.abilities[2]?.ability?.name ?? 'None'}</p>
            <p><span>Moves: </span>{pokemonData?.moves[0].move.name}, {pokemonData?.moves[1].move.name}, {pokemonData?.moves[2].move.name}, {pokemonData?.moves[3].move.name}</p>
        </div>
        <h2>Button of pain</h2>
        <ButtonC handleClick={clickCounter} text={newText}/>
        </div>
    )
}

export default PokemonInfo