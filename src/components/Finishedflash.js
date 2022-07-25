import React from "react";

export default function Finishedflash(props) {
  console.log(props.cont);
  if (props.choice === "Negative") {

    return (
      <div className="box finish">
        <h2 className="title">Pergunta {props.index}</h2>
        <ion-icon name="close-circle"></ion-icon>
      </div>
    )
  }
  else if (props.choice === "Almost") {


    return (<div className="box Almost">
      <h2 className="title">Pergunta {props.index}</h2>
      <ion-icon name="help-circle"></ion-icon>
    </div>)
  }
  else if (props.choice === "Zap") {

    return (
      <div className="box Zap">
        <h2 className="title">Pergunta {props.index}</h2>
        <ion-icon name="checkmark-circle"></ion-icon>
      </div>)
  }

}