import TxtBottom from "./TxtBottom";

export default function Bottom(props) {
    let icon = props.status;
    console.log(icon);
    return (
        <div className="bottom">
            <TxtBottom cont={props.cont} icon={icon} />
            <h3> {props.cont}/8 CONCLUÍDOS</h3>
            <div className="icons">
                {icon.map((element) => <ion-icon name={element}></ion-icon>)}
            </div>
        </div>);
}

