import React, {useState } from "react";
import Dropdown from "./Dropdown";
import Convert from './Convert';


const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  console.log(language);
  return (
    <div>
    <div classsName="ui form">
    <div className="field">
    <label>Enter Text</label>
    <input value={text} onChange={(e)=>setText(e.target.value)}/>
    </div>
    </div>
      <Dropdown
        label="Selected a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr/>
      <h3 className="ui header">output</h3>
      <Convert text={text} language={language}/>
    </div>
  );
};

export default Translate;
