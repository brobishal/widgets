import React, { useState, useEffect } from "react";
import axios from "axios";
const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState();
  const [debouncedText, setDebouncedText]  = useState(text);

  useEffect(()=>{
    const timerId = setTimeout(()=>{
      setDebouncedText(text);

    }, 500);

    return() =>{
      clearTimeout(timerId);

    };

  },[text])




  useEffect(() => {
    //in axois in second argument is informaton to send a body  (so seocond argument is empty object)
    //third argument is - to the axios.post statement,
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            
            //changing to debouncedText
            // q: text,
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      //    console.log(data);
      setTranslated(data.data.translations[0].translatedText);
    };

    //    setTranslated(data.data.translations[0].translatedText);
    doTranslation();

    //    this array is dependency
  // }, [language, text]);  //also updates text to debounce text
}, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
