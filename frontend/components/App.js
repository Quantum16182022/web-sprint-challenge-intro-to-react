import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets';
const urlPeople = 'http://localhost:9009/api/people';

function App() {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [clickedCharacter, setClickedCharacter] = useState(null);
  useEffect(() => {
    const fetchCharacters = async () => {
      const [planetsData, peopleData] = await Promise.all([
        axios.get(urlPlanets),    
        axios.get(urlPeople)        
      ]);
      console.log(planetsData, peopleData)
      setCharacters(peopleData.data);
      setPlanets(planetsData.data);
    };
    fetchCharacters();
  }, []);

  // characters = characters.map(character => {
  //   character.planet = character.planets.map(planetId => {
  //     const planet = planet.find(planet => planet.id === planetId);
  //     return planet.name;
  //   });
  //   return character;
  // });

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {characters.map((character, index) => {
  // Find the planet associated with the current character
  const characterPlanet = planets.find(planet => planet.id === planet.name);

  return (
    <Character
  key={index}
  character={character}
  onClick={() => setClickedCharacter(clickedCharacter === character.id ? null : character.id)}
  // The planet name is only passed if this character has been clicked
  planet={clickedCharacter === character.id && (characterPlanet ?characterPlanet.name : 'Unknown Planet')}
/>
   
  );
})}
console.log(Character)
    </div>
  );
}

export default App;
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
