import React,{ Fragment, useState } from 'react'
import axios from 'axios';

function Inicio() {
    const [email, setMail] = useState('');
    const client = "client";
    const handleSubmit = (event) => {
       event.preventDefault();

       const url = 'http://localhost:81/Bricksinvestment-main/mailCapture/add.php';
        
       let data = new FormData();
       data.append('email', email);
       data.append('client', client);

       axios.post(url, data)
    }

    return (
        <Fragment>
            <hr />
            <div className="flex hero">
                <div className="left">
                    <p className="titulo">Buscas una mejor<br/> manera de invertir<br/> en Propiedades?</p>
                    <p><span>Ladrillos</span> es la mejor opcion para invertir<br/> en propiedades a un menor costo y de la<br/> manera más simple.</p>
                    <a href="/#propiedades" className="link btn">Cómo funciona</a>
                </div>
                <div className="right">
                    <iframe className='video' src="https://www.youtube.com/embed/ko_OMynE3Bo" title="Construction Overview | Career Cluster / Industry Video Series" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className="flex btn"><p>Diversifica tu portafolio con <span>ladrillos</span></p></div>
                </div>
            </div>
            <div className="flex pasos" id="oportunidades">
                <div>
                    <p className="titulo">Invierte en Pesos Gana en Dólares</p>
                    <p className="descripcion">Desde tu casa con tu tarjeta de crédito<br/>Comienza a ganar dinero en tres pasos<br/></p>
                </div>
                <div className="flex item">
                    <img src="./images/elige inmueble.svg" alt="house" />
                    <p>Elige el inmueble</p>
                </div>
                <div className="flex item">
                    <img src="./images/compra ladrillos.svg" alt="bricks" />
                    <p>Compra ladrillos</p>
                </div>
                <div className="flex item">
                    <img src="./images/obten ganancia.svg " alt="bank" />
                    <p>Obten la ganancia</p>
                </div>
            </div>
            <div className="flex propiedades" id="propiedades">
                <div>
                    <p className="titulo">Nuestras propiedades</p>
                    <p>Elige en que propiedades invertir tu dinero para obtener ganancias,<br/>Nuestras propiedades son previamente seleccionadas por nuestros<br/>expertos en ventas según su ganancia potencial.<br/  ><br/ ></p>
                    <h4>Obtén acceso a información sobre</h4>
                    <div className="flex list">
                        <div className="flex">
                            <img src="./images/ok tic.svg" alt="" />
                            <p>evaluación de ganancias</p>                        
                        </div>
                        <div className="flex">
                            <img src="./images/ok tic.svg" alt="" />
                            <p>valor del terreno local</p>
                        </div>
                        <div className="flex">
                            <img src="./images/ok tic.svg" alt="" />
                            <p>promedio de crecimiento de la zona</p>
                        </div>
                        <div className="flex">
                            <img src="./images/ok tic.svg" alt="" />
                            <p>estimado de ingresos por alquiler</p>
                        </div>
                    </div>
                    <a href="/propiedades" className="link btn">Ver Propiedades</a>
                </div>
                <img src="./images/casas cards.svg" alt="products-UI-view " />
            </div>
            <hr />
            <div className="flex registro" id="registro">
                <div>
                    <p>Inicie el proceso de registro</p>
                    <form className="inputs" >
                        <input
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Ingrese su correo" 
                            value={email} 
                            onChange={(e) => setMail(e.target.value)} 
                            autoComplete="on" />
                        <input 
                            type="submit" 
                            value="Registrarse"
                            className="submit" 
                            onClick={handleSubmit}/>
                    </form>
                </div>
                <div>
                    <p className="titulo">La oportunidad de invertir a un solo click de distancia.</p>
                    <p className="descripcion">Inicie el proceso y obtenga acceso de inmediato a nuestra base de datos.<br/>Usted decide en que propiedad invertir, obtenga ganancias dentro<br/>del primer mes y depositelos de inmediato en su cuenta.</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Inicio;