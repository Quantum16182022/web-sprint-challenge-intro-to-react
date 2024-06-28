import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'


const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await axios.get(urlPeople);
        setCharacters(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchCharacters();
  }, []);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const res = await axios.get(urlPlanets);
        setPlanets(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchPlanets();
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {characters.map((character, index) => (
        <Character key={index} character={character} />
      ))}
      <h2>Star Wars Planets</h2>
      {planets.map((planet, index) => (
        <div key={index}>
          <h3>{planet.name}</h3>
          <p>{planet.description}</p>
        </div>
      ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
