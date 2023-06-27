import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      // console.log(event.target);
      // console.log('Body click');
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    // when first render our component it runs one time
    document.body.addEventListener("click", onBodyClick, { capture: true });
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    // console.log(` value ${option.value} and ${selected.value}`)
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          // we call onSelectedChange function
          // console.log("Item clciked");
          onSelectedChange(option);
        }}
      >
        {/* {console.log( onSelectedChange(option))} */}
        {option.label}
      </div>
    );
  });

  return (
    // Use useRef to track application renders.
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => {
            // console.log("Dropdown clciked");
            setOpen(!open);
          }}
          className={`ui selection dropdown  ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
