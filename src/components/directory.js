import React, { useState } from "react";
import explorer from "../data/filesnfolders"
import Folder from "./folders";

const Dir =() => {
    const [explore, setExplore] = useState(explorer);

    console.log(explore);

    return(
        <div>
            <Folder explorer={explore}/>
        </div>
    )
}

export default Dir;

