import React, { useState } from 'react';

function Character({ character, planet }) {
  const [showPlanet, setShowPlanet] = useState(false);

  return (
    <div className="card">
      <h3>{character.name}</h3>
      <button onClick={() => setShowPlanet(!showPlanet)}>
        {showPlanet ? 'Hide Planet' : 'Show Planet'}
      </button>
      {showPlanet && (
        <>
          <h4>Planet</h4>
          <p>{planet}</p>
        </>
      )}
    </div>
  );
}
export default Character;
// import React from 'react';
//   function Character({ character, planet }) {
//     const [showPlanet, setShowPlanet] = useState(false);
  
//   return (
//      <div className="card">
//       <h3>{character.name}</h3>
//       <button onClick={() => setShowPlanet(!showPlanet)}>
//         {showPlanet ? 'Hide Planet' : 'Show Planet'}
//       </button>
//       <h4>Planet</h4>
//       <p>{planet}</p>
//     </div>
//   );
// }
// export default Character;