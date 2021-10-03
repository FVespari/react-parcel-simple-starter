//https://www.youtube.com/watch?v=Pcrs4lo4ufc&list=RDCMUC0Ia5TK7poHITGYcKv3tlsA&index=3
// 2:10

import React, { useState } from 'react';
import ReactDom from 'react-dom';

console.log("Ok!");

function App(props) {

    const [value, setValue] = useState(0);

    function Incrementa() {
        setValue(value+1);
    }

    return (
        <div>
            <h1>{props.titolo}</h1>
            <div>v = {value}</div>
            <button onClick={() => {Incrementa()}}>Incrementa</button>
        </div>
    );
};

var rootNode = document.getElementById("app");
ReactDom.render(<App titolo="Titolo prova"/>, rootNode);
/*
    IL SECONDO ELEMENTO NELLA PARENTESI TONDA, CIOÈ rootNode,
    MI SPECIFICA DOVE VOGLIO METTERE LA MIA APPLICAZIONE <App/>
*/