
import React from "react";
import Finishedflash from "./Finishedflash";

export default function Content({ question, answer, state, index, status, setStatus, atualizaStatus, cont, setCont }) {
  const chooses = [{ name: "box notremember", txt: "Não lembrei", icon: "close-circle" }, { name: "box almostremember", txt: "Quase não lembrei", icon: "help-circle" }, { name: "box zap", txt: "Zap!", icon: "checkmark-circle" }];
  const [initial, setInitial] = React.useState(true);
  const [resp, setResp] = React.useState(true);
  const [choose, setChoose] = React.useState(true);
  const [choice, setChoice] = React.useState("");
  console.log(choose)
  return (
    <>
      {initial ? (<div className="box">
        <h2 className="title">Pergunta {index + 1}</h2>
        <ion-icon name="play-outline" onClick={() => setInitial(!initial)}></ion-icon>
      </div>) : (resp ? (<div class="box Open">
        <h2 class="title">{question}</h2>
        <img src={"./images/setinha.png"} alt="" onClick={() => setResp(!resp)} />
      </div>) : (choose ? (<div class="box Open Back">
        <h2 class="title">{answer}</h2>
        {chooses.map((element) => <Chose setCont={setCont} cont={cont} obj={element} index={index + 1} choose={choose} setChoose={setChoose} setChoice={setChoice} status={status} setStatus={setStatus} />)}
      </div>) : (<Finishedflash setCont={setCont} cont={cont} choice={choice} index={index + 1} status={status} setStatus={setStatus} />)))}
    </>
  )
}


function Chose(props) {
  let options = props.obj;
  function Click() {
    props.setChoose(!props.choose);
    props.setCont(props.cont + 1);
    if (options.name === "box notremember") {
      props.setStatus([...props.status, "close-circle"]);
      return props.setChoice("Negative")

    } else if (options.name === "box almostremember") {
      props.setStatus([...props.status, "help-circle"]);
      return props.setChoice("Almost")

    } else {
      props.setStatus([...props.status, "checkmark-circle"]);
      return props.setChoice("Zap")

    }

  }
  return (
    <>
      <div class={options.name} onClick={() => Click()} >
        <h3>{options.txt}</h3></div>
    </>
  )

}
