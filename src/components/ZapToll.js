import React from "react";
import Bottom from "./Bottom";
import Head from "./Head";
import Content from "./Content";



const obj = [{ question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript", state: "false" },
{ question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces", state: "false" },
{ question: "Componentes devem iniciar com __", answer: "letra maiúscula", state: "false" },
{ question: "Podemos colocar __ dentro do JSX", answer: "expressões", state: "false" },
{ question: "O ReactDOM nos ajuda __", answer: "nteragindo com a DOM para colocar componentes React na mesma", state: "false" },
{ question: "Usamos o npm para __ ", answer: "gerenciar os pacotes necessários e suas dependências", state: "false" },
{ question: "Usamos props para __", answer: "passar diferentes informações para componentes", state: "false" },
{ question: "Usamos estado (state) para __ ", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", state: "false" }
]

const objAsks = [];
function createObj() {
  obj.forEach((value) => {
    objAsks.push({ ...value });
  });
  objAsks.sort(() => Math.random() - 0.5);
  return objAsks;
}
createObj();

export default function ZappToll() {
  const [status, setStatus] = React.useState([]);
  const [cont, setCont] = React.useState(0);
  console.log(objAsks);

  const objhead = { img: "./images/logo-pequeno.png", txt: "ZapRecall" };
  return (
    <div className="zapToll">
      <Head img={objhead.img} txt={objhead.txt} />
      <div className="content">
        {objAsks.map((element, index) => <Content cont={cont} setCont={setCont} question={element.question} answer={element.answer} state={element.state} index={index} status={status} setStatus={setStatus} />)}
      </div>
      <Bottom cont={cont} setCont={setCont} status={status} setStatus={setStatus} />
    </div>
  );

}














