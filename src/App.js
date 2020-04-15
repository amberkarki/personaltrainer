import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Customers from './components/Customers';

import Today from './components/Currentdate';
import Navigation from './components/Navigation';
import Card from './components/Card';
import Calender from './components/Calender';
import Charts from './components/Charts';
import CardCustomers from './components/CardCustomers';
import Footers from './components/Footer';


function App() {
  return (
    <div>
 <Navigation />
 <hr />
 <div className="container-">
 <Card /> <br />
   <CardCustomers />
 
   

 </div>
 <div>
<Footers />
 </div>
 </div>
   
  );
}

export default App;
