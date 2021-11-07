import './index.scss';
import  Footer from './components/footer';
import  Work from './components/Work';
import  About from './components/About';
import  Contact from './components/Contact';
import NavBar from './components/NavBar';
import Brazzi from './components/Brazzi';
import Street from './components/Street';
import Jasmine from './components/Jasmine';
import Palanga from './components/Palanga';
import Monika from './components/Monika';
import Katrina from './components/Katrina';
import Anna from './components/Anna';
import Film from './components/Film';
import Dee from './components/Dee';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <BrowserRouter>
        <ScrollToTop />
        <NavBar />
          <Switch>
            <Route component={Work} path='/' exact />
            <Route component={About} path='/about' />
            <Route component={Contact} path='/contact' />
            <Route component={Brazzi} path='/brazzi' />
            <Route component={Street} path='/street' />
            <Route component={Jasmine} path='/jasmine' />
            <Route component={Monika} path='/monika' />
            <Route component={Katrina} path='/katrina' />
            <Route component={Anna} path='/anna' />
            <Route component={Palanga} path='/palanga' />
            <Route component={Film} path='/film' />
            <Route component={Dee} path='/dee' />

          </Switch>
          <Footer />
        </BrowserRouter> 
      </div>
    </div>
    
  );
}

export default App;


