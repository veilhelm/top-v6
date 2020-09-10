import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';

function Payment() {
  function handlePayment() {
    const paymentHandler = window.ePayco.checkout.configure({
      key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
      test: true
    })

    paymentHandler.open({
      external: 'false',
      amount: '20000',
      tax: '0',
      tax_base: '0',
      name: 'Programa TOP make it real',
      description: 'programa inmersivo fullstack node & react',
      currency: 'cop',
      country: 'CO',
      lang: 'en',
      invoice: '12345',
      extra1: 'extra1',
      extra2: 'extra2',
      extra3: 'extra3',
      response: `${process.env.REACT_APP_URL}/response`,
      autoclick: 'false',
      name_billing: 'Simon Hoyos',
      address_billing: 'Carrera 72 # 84 56',
      type_doc_billing: 'cc',
      mobilephone_billing: '3152375046',
      number_doc_billing: '1600463789',
    })
  }

  return <button onClick={handlePayment}>Pagar</button>
}

function Response() {
  return <h1>Response</h1>
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Payment} />
          <Route exact path="/response" component={Response} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
