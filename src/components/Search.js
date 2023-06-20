import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");

  const [debouncedTerm, setDebouncedTerm] = useState('term');
  // default value here empty array
  const [results, setResults] = useState([]); 





  useEffect(()=>{
    const timerId = setTimeout(()=>{
      setDebouncedTerm(term);
    
    },1000);

    // return clean up function that cancel timer
    return () =>{
      clearTimeout(timerId);
  };
  },[term]);



// Another useEffect

useEffect(() =>{
  const search = async () => {
    //
    const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
      // second argument we are going to put in option obejct which is params object
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: debouncedTerm,
      },
    }); 

    setResults(data.query.search);
  };


  search(); 

},[debouncedTerm]);

  // console.log("I run with every render");
  // console.log(results);
  // arrow function we provided only be executed one time at the initial render
//   useEffect(() => {
//     // this is aother solution
//     // const search = async () => {
//     //   //
//     //   const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
//     //     // second argument we are going to put in option obejct which is params object
//     //     params: {
//     //       action: "query",
//     //       list: "search",
//     //       origin: "*",
//     //       format: "json",
//     //       srsearch: term,
//     //     },
//     //   });

//     //   setResults(data.query.search);
//     // };

//     console.log(!results.length);

//     if(term && !results.length){
//       search();
//     }else{
//       const timeoutId = setTimeout(()=>{
//         if (term) {
//           search();
//         }
  
//       }, 1000);

//       return () =>{
//         // console.log("clean up");
//         clearTimeout(timeoutId);
  
  
//       };


//     }
   

//     // clearTimeout(timeoutId);
   

//     // this is immediately invoked function  - it is a helper function
//     // this is another solution
//     // (async () =>{
//     //     await axios.get('dsds',{
//     //         // second argument we are going to put in option obejct which is params object

//     //     });

//     // })();

//     // this is another solution using promise which is chain on
//     // axios.get('dsdsd')
//     //     .then((response)=>{
//     //         console.log(response.data);

//     //     });

//     // //not allow use async and await keyoword directly inside of this useEffect hooks
//     // useEffect(async () => {
//     //this happens when add defualt array[] as a intitial render
//     //console.log('I Only run once ');

//     // after removing default array
//     // console.log('I Run after every render and  at initial render ');

//     //not allow directly use async and await keyoword directly inside of this funciton
//     //It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

//     // await axios('dsdsd');


//     console.log('initila render or term was change')
//     // from this useEffect 
//     // whenever we define useEffect we provide function as a first argument
//     // there is only one possible value we can return from this arrow function
//     //   only one type of value allow to return 
// // allow to return another function
  
//   }, [term,results.length]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
      <div className="right floated content">
        <a className="ui button"
        href={`https://en.wikipedia.org?curid=${result.pageid}`} 
        >Go</a>
      </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {/* it removes the <span> written in content  */}
          {/* for security */}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          {/* {result.snippet} */}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="  field">
          <label>Enter search term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
