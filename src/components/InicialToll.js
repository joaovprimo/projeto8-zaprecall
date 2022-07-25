import React from "react";
import ZappToll from "./ZapToll";


const Inicialobj = { img: "./images/logo.png", title: "ZapRecall", textbox: "Iniciar Recall!", stat: "inicialTool" }
export default function Tools() {
    return (
        <>
            <Inicial img={Inicialobj.img} title={Inicialobj.title} textbox={Inicialobj.textbox} stat={Inicialobj.stat} />
        </>
    );
}

function Inicial({ img, title, textbox, stat }) {
    const [state, setState] = React.useState(stat);
    const [toll, setToll] = React.useState(true);
    return (
        <>
            {toll ?
                (<div className={state} >
                    <img src={img} alt="" />
                    <h1>{title}</h1>
                    <div className="box" onClick={() => setToll(!toll)} > {textbox} </div>
                </div>)
                : (<> <ZappToll class={"ZapToll"} /> </>)}
        </>
    );
}