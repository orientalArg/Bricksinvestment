import React from 'react'

function Footer() {
    return(
        <footer>
            <div className="flex top">
                <a href="/" className="logo link">
                    <p>ladri</p>
                    <span>llos</span>
                </a>
                <div className="flex columna">
                    <p className="titulo">soporte</p>
                    <a href=" ">Contactanos</a>
                    <a href=" ">Centro de Ayuda</a>
                </div>
                <div className="flex columna">
                    <p className="titulo">empresa</p>
                    <a href=" ">Sobre Nosotros</a>
                    <a href="/propiedades">Propiedades</a>
                </div>
                <div className="flex columna">
                    <p className="titulo">inversion</p>
                    <a href="/#propiedades">Como Funciona</a>
                    <a href=" ">Oportunidades</a>
                    <a href="/#registro">Registrarse</a>
                </div>
            </div>
            <hr />
            <div className="bottom">
                <p>Todos los derechos reservados Ladrillos S.A 2020-2024</p>
                <p className="descripcion">La empresa ladrillos s.a es una fintech orientada a facilitar la inversión directa en bienes de alto valor adiquisitivo</p>
            </div>
        </footer>
    )
}

export default Footer;