import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
const items = [
    {
        title:"What is React ?",
        content: "React is a frontend javacript framework"
    },
    {
        title:"Why use React ?",
        content:"React is a favorite js library among engineers"
    },
    {
        title:"how do you use React ?",
        content:"You use React by creating components",
    }
];


const options = [
    {
        label:'The color red',
        value:'red'
    },
    {
        label:"The color green",
        value:"green",

    },
    {
        label:'The color blue',
        value:'blue'
    }

]


export default () =>{

    const [selected, setSelected] = useState(options[0])
    return (
        <div> 
            {/* <Accordion items={items}/> */}
            {/* <Search/> */}
            <Dropdown
//             onSelectedChange: This is the name of a prop that is being passed to a child component. 
//It suggests that the child component expects a function to be passed as a value for this prop.
// setSelected: It refers to a function that is being passed as the value for the onSelectedChange prop.
            onSelectedChange={setSelected}
             selected={selected} 
             options={options}/>   
        </div>
 
    )
}

