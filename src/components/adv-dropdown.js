import React, { useState } from "react";
import drop from "../data/dropdown-items";

const Makedropdown = () => {
    const [item, setItem] = useState([]);

    return (
        <div>
            Hello,
            {/* first dropdown*/}
            <select value={item} onChange={(e) => {setItem(e.target.value) 
            //console.log(item)
            }}>
                {
                    drop.map((key, val) =>{
                        return(
                            <option key={val} value={val}>{key.name}</option>
                        )    
                    })
                }
            </select>

                {/* 2nd dropdown*/}

            <select>
                {
                    drop[item] && drop[item].subs.map((key,val) =>{
                        return <option value={val}>{key}</option>
                    })
                }
            </select>

        </div>
    )
}


export default Makedropdown;