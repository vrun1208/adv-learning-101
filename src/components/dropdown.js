import React, { useState } from "react";

const DropDown =() => {
    const items = ["fruits", "vegetables"];
    const fruit = ["apple", "mango", "banan", "orange"];
    const vege = ["baigan", "aloo","gobi"];

    const [item, setItem] = useState('');
    const [nest, setNest] = useState('');

    const handle = (e) =>{
        setItem(e.target.value);
        
    };

    const handler = (e) => {
        if(item === "fruits"){
            setNest(e.target.value);
        }
        else{
            setNest(e.target.value);
        }
    }
    

    return(
        <>
            <h1>
                Nested Dropdown.
            </h1>
            <div className="drop-down">
            <select value={item} onChange={handle}>
            {items.map(it => 
                       <option key={it}>{it}</option>
                )}  ; 
            </select>
            
                {item === "fruits" ? (
                    <select value={nest} onChange={handler}>
                    {fruit.map(it => 
                               <option key={it}>{it}</option>
                        )}  ; 
                    </select>
                ) : (
                    <select value={nest} onChange={handler}>
                    {vege.map(it => 
                               <option key={it}>{it}</option>
                        )}  ; 
                    </select>
                )}
            </div>
        </>
    )
}

export default DropDown;