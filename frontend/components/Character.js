import React, { useState } from 'react';
function Character({ characterName, homeworld}) {
  const [showPlanet, setShowPlanet] = useState(false);
  return (
    <div className="character-card"onClick={() => setShowPlanet(!showPlanet)}>       
      {<h3 className="character-name">
        {characterName}
      </h3>}
      <p>
  {showPlanet &&
    <span>
      Planet: <span className="character-planet">{homeworld}</span>
    </span>
  }
</p>
    </div>
  );
}
export default Character;

