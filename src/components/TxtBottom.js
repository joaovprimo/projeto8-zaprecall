export default function TxtBottom(props) {
    console.log(props.icon);
    if (props.cont === 8) {
        for (let i = 0; i < props.icon.length; i++) {
            if (props.icon[i] === "close-circle") {
                return (
                    <>
                        <div className="result">
                            <img src="./images/sad.png" alt="" />
                            <h2>Putz...</h2>
                        </div>
                        <div className="txtBottom">
                            <h4>Ainda faltam alguns...
                                Mas não desanime!</h4>
                        </div>
                    </>)
            }
        }
        return (
            <>
                <div className="result">
                    <img src="./images/party.png" alt="" />
                    <h2>Parabéns!</h2>
                </div>
                <div className="txtBottom">
                    <h4>Você não esqueceu de nenhum flashcard!</h4>
                </div>
            </>
        )
    }
    else {
        return null;
    }
}
