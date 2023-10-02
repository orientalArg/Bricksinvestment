import React from 'react'
import calc from '../utils/calc'
import {data} from '../data/Properties'

import '../styles/propiedades.css'

function Propiedades() {
    return (
        <div className="contenido"
            Style="
                padding: 50px 0;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                "
                >
            {/*<div className="contenedor-tarjetas">
            {data.map((propiedad, index) => 
                <div className='tarjeta' key={index} title={`propiedad en ${propiedad.localidad}`}>
                <h4 title="localidad">{propiedad.localidad}</h4>
                <img src={propiedad.img.src} alt={propiedad.img.alt} />
                <table>
                <tr>
                <td className='rooms'>
                <div><p>{propiedad.baños}</p></div>
                <div><p>{propiedad.habitaciones}</p></div>
                </td>
                <td><p className='type'>{propiedad.tipo}.</p></td>
                    </tr>
                    <tr>
                        <td title="Basado en intereses ANUALES">
                            <p>Evaluacion de ganancias</p>
                            <p>NaN</p>
                        </td>
                        <td>
                            <p>Valor por metro cuadrado</p>
                            <p title='Total en Dolares'>u$ {calc(propiedad.valor, propiedad.m2)}</p>
                        </td>
                    </tr>
                </table>
                <table className="resultado">
                    <tr title='cantidad inversores'>
                        <td><p>inversiones recibidas</p></td>
                        <td><p>NaN</p></td>
                    </tr>
                    <tr>
                        <td><p>monto recibido</p></td>
                        <td><p className='income'  title='Total en Dolares'>u$ NaN</p></td>
                    </tr>
                </table>
                <button> Ver Detalles</button>
            </div>
            )}
            </div>*/}
            <img src='https://cdn.pixabay.com/animation/2023/06/13/15/13/15-13-03-816_512.gif' alt="animation"/>
            <h1 Style="margin: 50px;">Reservado Para miembros</h1>
            <a href="/">&larr;Volver A la página principal</a>
        </div>
    )
}

export default Propiedades