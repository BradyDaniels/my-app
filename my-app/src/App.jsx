import React from 'react';
import Button from '@material-ui/core/Button'

import LPage from './Components/LPage';
import Products from './Components/Products';
import ProductP from './Components/Product_Page';
import NavBar from './Components/NavBar.jsx';
import FootPage from './Components/FootPage.jsx';
import Info from './Components/Contact.jsx';


import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


function App() {
  return (
    <React.Fragment className="App">
         <Router>
            <NavBar></NavBar>
            <Route exact path="/my-app" component={LPage
            } ></Route>
            <Route exact path="/" component={LPage
            } ></Route>
            <Route exact path="/Products" component={Products}/>
            <Route exact path="/Info" component={Info}/>
            <FootPage/>
         </Router>
         
    </React.Fragment>
  );
}

export default App;
