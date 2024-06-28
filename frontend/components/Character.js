import React, {useState} from 'react'

  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  function Character(props) { 
const [showHomeworld, setShowHomeworld] = useState(false);

      const toggleHomeworld = () => {
  setShowHomeworld(!showHomeworld);
};
  return (
  <div>
    <h3>{props.character.name}</h3>
    <p>{props.character.description}</p>
    <button onClick={toggleHomeworld}>
      {showHomeworld ? 'Hide Homeworld' : 'Show Homeworld'}
    </button>
    {showHomeworld && <p>{props.character.homeworld}</p>}
  </div>
  )
}

export default Character
