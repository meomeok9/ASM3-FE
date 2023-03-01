const { useState, useRef } = require("react");

const NewComponent = () => {
  const [newState, setNewState] = useState(0);
    const inputRef = useRef();
  const ClickHandler = () => {
    setNewState()
  };
  const changHander=() => {
    
  }
  return (
    <div>
        <input ref={inputRef} value={newState} type='text' onChange={changHander}/>
      <p>{newState}</p>
      <button type="button" onClick={ClickHandler}></button>
    </div>
  );
};
export default NewComponent;
