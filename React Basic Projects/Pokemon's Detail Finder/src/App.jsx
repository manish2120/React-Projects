import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [name, setName] = useState();
  // const [stats, setStats] = useState();
  const [moves, setMoves] = useState();

  useEffect(() => {
    async function data() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      // setStats(res.data.stats);
      setMoves(res.data.moves.length);
      console.log(res);
    }
    data();
  }, [name, moves])

  return (
    <>
    <div>
      <h2>You Choose {name} Pokemon</h2>
      <select value={name} onChange={(e) => {
        setName(e.target.value);
      }}>
        <option value="pikachu">Pikachu</option>
        <option value="bulbasaur">Bulbasaur</option>
        <option value="venusaur">Venusaur</option>
        <option value="ivysaur">Ivysaur</option>
        <option value="charmeleon">Charmeleon</option>
      </select>

      <div>
        {/* <p>Stats: {stats}</p> */}
        <p>Moves: {moves}</p>
      </div>
    </div>
    </>
  )
}

export default App
