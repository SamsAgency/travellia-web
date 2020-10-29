import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Landing/Homepage';
import Adventure from './Components/Adventure/Adventure';
import Hotels from './Components/Hotels/Hotels';
import Traveller from './Components/Traveller/Travel';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Footer from './Components/Footer/Footer';
import NotFound from './Components/404/NotFound';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>

        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/adventure" component={Adventure} />
          <Route path="/travel" component={Traveller} />
          <Route path="/hotels" component={Hotels}/>
          <Route component={NotFound} />
        </Switch>

        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
