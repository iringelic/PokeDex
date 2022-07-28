import axios from 'axios';
import React, { useEffect, useState } from "react";
import './App.css';

function App() {
    const [pokemons, setPokemon] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
                setPokemon(data.results)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [])

    return (
      <div className="App">
        <div className="results">
          {pokemons.map((pokemon) => (
            <div key={pokemon.id}>
              <img src={pokemon.image} alt={pokemon.name} />
              {pokemon.name}
            </div>
          ))}
        </div>
      </div>
    );
}

export default App;
