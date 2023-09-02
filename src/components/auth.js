import React, { useState } from "react";
import "../App.css"
const Card = (ev) =>{
    const [passInput, setPassInput] = useState('');
    const [sub, setSub] = useState(true);
    const [colr, setColr] = useState(null);

    const passValue = passInput;
    const passlen  = passValue.length;
    console.log(passlen);

    const handleClick = () => {
        setSub(false);
    }

    const handleChange = (e) => {
        setPassInput(e.target.value);

        if(passlen >1 && passlen < 5){
            setColr("weak");
        }
        else if(passlen>5 && passlen<9){
            setColr("normal");
        }
        else if(passlen > 9){
            setColr("strong")
        }
    }

    const reset = () => {
        setPassInput("");
        setColr("");
    }

    return(
        <div>
            <h2>Auth Page.</h2>
            <div className="box">
                {sub ? (
                    <div className="see">
                    <p><i>Username</i></p>
                    <input type="text" placeholder="username" className="inp"  />

                    <p><i>Password</i></p>
                    
                        <input type="password" placeholder="username" onChange={handleChange}
                         className={`bar strength-${colr}`} value = {passInput}/>
                    
                    

                    <button className="btn" type="submit" onClick={handleClick}>submit</button>
                    <button className="btn" onClick={reset}>reset</button>
                </div>  
                ) : <h1>Thenks.</h1> }
                  
            </div>
        </div>
    )
}

export default Card;