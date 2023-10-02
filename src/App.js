import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Inicio from './pages/Inicio.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Propiedades from './pages/Propiedades.jsx'
import NoPage from './pages/NoPage.jsx'


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
            <Route 
              path="*"
              component={NoPage}
            />
          </Switch>
          <Footer />
      </Router>
    );
  }
  
  export default App;
  