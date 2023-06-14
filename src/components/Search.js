import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Search = () =>{
    const [term, setTerm] = useState('');

    console.log('I run with every render');
    // arrow function we provided only be executed one time at the initial render
    useEffect(() => {

        // this is aother solution
        const search = async () =>{
            //
            await axios.get('https://en.wikipedia.org/w/api.php',{
             // second argument we are going to put in option obejct which is params object
                params:{
                    action:"query",
                    list:"search",
                    origin:"*",
                    format:"json",
                    srsearch:term,
                }
            }); 
        }

        search();


        // this is immediately invoked function  - it is a helper function
        // this is another solution 
        // (async () =>{
        //     await axios.get('dsds',{
        //         // second argument we are going to put in option obejct which is params object
            

        //     }); 

        // })();


        // this is another solution using promise which is chain on
        // axios.get('dsdsd')
        //     .then((response)=>{
        //         console.log(response.data);

        //     });

        // //not allow use async and await keyoword directly inside of this useEffect hooks
    // useEffect(async () => {
        //this happens when add defualt array[] as a intitial render
        //console.log('I Only run once ');
        


        // after removing default array
        // console.log('I Run after every render and  at initial render ');
        
 //not allow directly use async and await keyoword directly inside of this funciton
//It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

        // await axios('dsdsd');

    },[term]);

    
  
    return(
        <div>
            <div className='ui form'>
                <div className='  field'>
                    <label>Enter search term</label>
                    <input 
                    value={term}
                    onChange={(e)=>setTerm(e.target.value)}
                    className='input' 
                    />
                </div>
            </div>
        </div>
    )
}           

export default Search;