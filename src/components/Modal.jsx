import React from 'react'

export default function Modal(d) {
    if (d) {
    return(
        <div className="modal">
        <div>
            <img src={d.img.src} alt={d.img.alt} />
        </div>
        <div>
            <div>{d.localidad}</div>
            <div><p>{d.baños}</p></div>
            <div><p>{d.baños}</p></div>
        </div>
    </div>
    )} else {
        return <div></div>
    }
}