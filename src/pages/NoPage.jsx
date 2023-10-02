import '../styles/nopage.css'
import { Link } from 'react-router-dom';

export const NoPage = ()=> {
    return (
        <section className="nopage">
            <i><h3>http ERROR 404</h3></i>
            <h2>...Bueno, Esto es incómodo.</h2>
            <small>Parece que no pudimos encontrar tu página</small>
            <div className='gif'>
                <img src="https://66.media.tumblr.com/b16bdcfb6d5a35ed889811fb9f7ba8a9/tumblr_mlacf24V8d1rfjowdo1_r1_500.gif" alt="" />
            </div>
            <nav>
                <div>
                    <Link to="/" className='title'>&larr; Bienvenido</Link>
                    <Link to="/propiedades" className='title'>Propiedades&rarr;</Link>
                </div>
            </nav>
        </section>
    )
}

export default NoPage