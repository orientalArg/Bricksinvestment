import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Inicio from './components/Inicio.jsx'
import Nosotros from './components/Nosotros.jsx'
import Propiedades from './components/Propiedades.jsx'


function App() {
    return (
      <Router>
          <Header />
          <Switch>
            <Route 
              exact path="/"
              component={Inicio}
            />
            <Route 
              exact path="/nosotros"
              component={Nosotros}
            />
            <Route 
              exact path="/propiedades"
              component={Propiedades}
            />
          </Switch>
          <Footer />
      </Router>
    );
  }
  
  export default App;
  