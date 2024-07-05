import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets';
const urlPeople = 'http://localhost:9009/api/people';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {    
    const fetchCharacters = async () => {
      const [planetsData, peopleData] = await Promise.all([
        axios.get(urlPlanets),
        axios.get(urlPeople)
      ]);
      console.log(characters)
      setCharacters(peopleData.data.map(character => {
        const Planet = planetsData.data.find(planet => planet.id === character.homeworld);
        return {
          ...character,
          homeworld: Planet ? Planet.name : 'Unknown Planet',
        };
      }));

         };
    fetchCharacters();
  }, [characters]);
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {characters.map((character, index) => (
        <Character
          key={index}
          characterName={character.name}
          homeworld={character.homeworld}
        />
      ))}
    </div>
      );
    }    
    export default App;
// :exclamation: DO NOT CHANGE THE CODE BELOW
if (typeof module !== 'undefined' && module.exports) {
  module.exports = App;
}


