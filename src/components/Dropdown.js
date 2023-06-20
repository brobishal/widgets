import React,{useState} from "react";
const Dropdown = ({ options, selected, onSelectedChange }) => {
  console.log(typeof selected)


  const[open, setOpen] = useState(false);

  const renderedOptions = options.map((option) => {
    // console.log(` value ${option.value} and ${selected.value}`)
    if(option.value === selected.value) {
      return null;
    }

    return (
      <div 
      key={option.value} 
      className="item"
      onClick={()=> 
      // we call onSelectedChange function
      onSelectedChange(option)
      }
        >
      {/* {console.log( onSelectedChange(option))} */}
      {option.label}
      </div>
    );

  });

  
  return (
    <div className="ui form">
      <div className="field">
        <label className="label"> Select a color</label>
        <div onClick={()=> setOpen(!open) } className={`ui selection dropdown  ${open ? 'visible active': '' }`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${ open ? 'visible transition' : ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
