import React from "react";

const Inicialobj = {img:"./images/logo.png", title:"ZapRecall", textbox:"Iniciar Recall!", stat:"inicialTool"}
export default function Tools (){  
    return (
<>
<Inicial img={Inicialobj.img} title={Inicialobj.title} textbox={Inicialobj.textbox} stat={Inicialobj.stat} />
</>
    );    
}

function Inicial({img, title, textbox, stat}){
const [state, setState] = React.useState(stat);
function addHidden(){
let newstate = stat + ' hidden';
setState(newstate);
}

    return(
    <>
<div className={state} >  
<img src={img} alt=""/>
<h1>{title}</h1>
<div className="box" onClick={()=> addHidden() } > {textbox} </div>
</div>
</>
);
}