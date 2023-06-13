import React from 'react';
import Accordion from './components/Accordion';

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

export default () =>{
    return (
        <div>
            <Accordion items={items}/>
        </div>

    )
}

