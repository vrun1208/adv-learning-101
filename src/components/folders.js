import React, { useState } from "react";

function Folder({explorer}) {
    const [expand, setExpand] = useState(false);

    /* const handleClick =(e) =>{
        e.stopPropagation();
        setExpand(true)
    } */

    if(explorer.isFolder){   
    return (
        <div style={{marginTop: 10}}>
            <div onClick={()=> setExpand(!expand)} >
            <span className="folder">
               📁 {explorer.name}
            </span>
            </div>
            <div style={{display : expand ? "block" : "none", paddingLeft: 25}}>
                {explorer.items.map((e) =>{
                    return(
                        <span style={{marginLeft: 12}}>
                            <Folder 
                                key={e.id}
                                explorer={e}
                            />
                        </span>
                    )
                })
                }
            </div>

        </div>
    )
            } 
            else{
                return(
                    <span className="file">
               📄 {explorer.name}
            </span>
                )
            
            }
}

export default Folder;