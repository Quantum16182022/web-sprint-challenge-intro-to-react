import React, {useState} from 'react'

  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  function Character(props) {
    const [showHomeworld, setShowHomeworld] = useState(false);
  
    const toggleHomeworld = () => {
      setShowHomeworld(!showHomeworld);
    };
  
    return (
      <div className="character-card" onClick={toggleHomeworld}>
        <h3 className="character-name">{props.character.name}</h3>
        <p>{props.character.description}</p>
        {showHomeworld && <p className="character-planet">{props.planet}</p>}
      </div>
    )
  }  
  
export default Character
