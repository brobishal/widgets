import React, {useState } from 'react';

const Accordion = ({items}) =>{
    
    // here we use this like array destructuring 

    // activeIndex - piece of state
    // setActiveIndex - function to change this piece of state
    // null - initial value for this piece of state
     
    const [activeIndex, setActiveIndex] = useState(null);
    // console.log(activeIndex);

    const onTitleClick = (index) =>{
        // console.log('Title click7ted', index)

        setActiveIndex(index)

    }
    const renderedItems = items.map((item,index) =>{
        const active = index === activeIndex ? "active":"";
        return(
            <React.Fragment key={item.title}>
            <div 
            className={`title ${active}`}
            onClick={()=> onTitleClick(index)}
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>

            </React.Fragment>
        )


    })
    return <div className='ui styled accordion'>
        {renderedItems}
        {/* <h1>{activeIndex  }</h1> */}
    </div>;
}; 

export default Accordion;