import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets';
const urlPeople = 'http://localhost:9009/api/people';

function App() {

  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const [planetsData, peopleData] = await Promise.all([
        axios.get(urlPlanets),
        axios.get(urlPeople)
      ]);

      setPlanets(planetsData.data);

      setCharacters(peopleData.data.map(character => ({
        ...character,
        planets: character.planets
          ? character.planets.map(planetId => {
              const planet = planetsData.data.find(planet => planet.id === planetId);
              return planet ? planet.name : 'Unknown Planet';
            })
          : [],
      })));
    };
    fetchCharacters();
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {characters.map((character, index) => (
        <Character
          key={index}
          character={character}
          planet={character.planets.join(', ')}
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

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Character from './Character';

// const urlPlanets = 'http://localhost:9009/api/planets';
// const urlPeople = 'http://localhost:9009/api/people';

// function App() {
  
//   const [characters, setCharacters] = useState([]);
//   const [planets, setPlanets] = useState([]);

  
//   useEffect(() => {
//     const fetchCharacters = async () => {
//       const [planetsData, peopleData] = await Promise.all([
//         axios.get(urlPlanets),    
//         axios.get(urlPeople)        
//       ]);
  
//       setPlanets(planetsData.data);
  
//       setCharacters(peopleData.data.map(character => ({
//         ...character,
//         planets: character.planets
//           ? character.planets.map(planetId => {
//               const planet = planetsData.data.find(planet => planet.id === planetId);
//               return planet ? planet.name : 'Unknown Planet';
//             })
//           : [],
//       })));
//     };
//     fetchCharacters();
//   }, []);

//   function Character({ character, planet }) {
//   const [showPlanet, setShowPlanet] = useState(false);
 

//   return (
    
//      <div className="card">
//       <h3>{character.name}</h3>
//       <button onClick={() => setShowPlanet(!showPlanet)}>
//         {showPlanet ? 'Hide Planet' : 'Show Planet'}
//       </button>
//       <h2>Star Wars Characters</h2>
//       <p>See the README of the project for instructions on completing this challenge</p>
//       {characters.map((character, index) => (
//         <Character
//           key={index}
//           character={character}
//           planet={character.planets.join(', ')}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;


// // ❗ DO NOT CHANGE THE CODE  BELOW
//   if (typeof module !== 'undefined' && module.exports) module.exports = App}
