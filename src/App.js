import React from 'react';
import logo from './logo.svg';
import './App.css';
import  { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Customers from './components/Customers';
import Navigation from './components/Navigation';
import Card from './components/Card';
import Calender from './components/Calender';
import Charts from './components/Charts';
import CardCustomers from './components/CardCustomers';
import Footers from './components/Footer';
import Home from './components/Home';
import TraingingList from './components/TrainingList'
import CustomersTraining from './components/CustomersTraining';



function App() {
const []


  return (
    <div>
      <BrowserRouter>
 <Navigation />
 <hr />
 <div className="container-">
    
 <Switch>
 <Route exact path="/" component={Home} />

   <Route exact path="/customers" component={Customers} />
   <Route exact path="/traininglist" component={TraingingList} />
   <Route exact path="/customerstraining" component={CustomersTraining} />

   <Route exact path="/calender" component={Calender} />
 </Switch>

 </div>
 <div>
<Footers />
 </div>
 </BrowserRouter>
 </div>
   
  );
}

export default App;
