import React, { useState } from 'react';
function Character({ characterName, homeworld}) {
  const [showPlanet, setShowPlanet] = useState(false);
  
  return (
    <div className="character-card">
    
      {<h3 className="character-name" onClick={() => setShowPlanet(!showPlanet)}>
        {characterName}
      </h3>}         
      <p>
  {showPlanet && 
    <span>
      planet: <span className="character-planet">{homeworld}</span>
    </span>
  }
</p>
    </div>
  );
}
export default Character;

//   const [showPlanet, setShowPlanet] = useState(false);
  
//   return (
//     <div className="character-card">
//       <h3 className="character-name">{characterName}</h3>
//       <p>
//         Planet: 
//         {showPlanet && <span className="character-planet">{planet}</span>}
//       </p>
//       <button onClick={() => setShowPlanet(!showPlanet)}>
//         {showPlanet ? 'Hide Planet' : 'Show Planet'}
//       </button>
//     </div>
//   );
// }


//  import React, { useState } from 'react';
// //  import Character from './Character';

// function Character({ characterName, planet }) {
//   const [showPlanet, setShowPlanet] = useState(false);
  
//   return (
//     <div className="character-card">
//       <h3> className="character-name"</h3> 
//       <p>
//       "planet : "
//       <span> className="character-planet"</span>
//       </p>
//       <button onClick={() => setShowPlanet(!showPlanet)}>
//         {showPlanet ? 'Hide Planet' : 'Show Planet'}
//       </button>
//     </div>
//   );
// }
// export default Character;
