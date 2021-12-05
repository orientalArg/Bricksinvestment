import React from 'react' 
function Header() {
    const show = () => {
        document.querySelector('nav').classList.add('show');
    }
    const hide = () => {
        document.querySelector('nav').classList.remove('show');
    }
    return(
        <header className="flex">
            <a href="/" className="logo link">
                <p>ladri</p>
                <span>llos</span>
            </a>
            <div className="burguer" onClick={ show }>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav className="flex">
                <button onClick={ hide }>X</button>
                <a href="/propiedades" className="link">Propiedades</a>
                <a href="/#" className="link">Oportunidades</a>
                <a href="/nosotros" className="link">Sobre Nosotros</a>
                <a href="/#propiedades" className="link">Como Funciona</a>
            </nav>
        </header>
    )
}

export default Header;