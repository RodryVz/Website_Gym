import "./Join.css";

const Join = () => {
    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">¿Listo para </span>
                    <span>subir de nivel </span>
                </div>
                <div>
                    <span>tu cuerpo </span>
                    <span className="stroke-text">con nosotros?</span>
                </div>
            </div>

            <div className="right-j"></div>
            <form action="" className="email-container">
                <input type="email" name="user_email" placeholder="Ingrese su correo" />
                <button className="btn btn-j">Unete Ahora</button>
            </form>
        </div>
    )
}

export default Join