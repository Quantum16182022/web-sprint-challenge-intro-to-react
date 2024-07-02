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
//   return (
  
//     <div>
//       <h2>Star Wars Characters</h2>     
//       {characters.map((character, index) => (
//         <Character
//           key={index}
//           character={character}
//           planet={character.planets}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;
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
          characterName={character.name}
          planet={character.planets[0]}
        />
      ))}
    </div>
  
  // return (
  //   <div>
  //     <h2>Star Wars Characters</h2>     
  //    {characters.map((character, index) => (
  //     <Character
  //       key={index}
  //          characterName={character.name}
  //          planet={character.planets[0]}
  //        />
  //      ))}
  //      </div>
  );
}

export default App;


// :exclamation: DO NOT CHANGE THE CODE BELOW
if (typeof module !== 'undefined' && module.exports) {
  module.exports = App;
}


