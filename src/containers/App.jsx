import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from '../components/layout';
import { Form } from '../components/form';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route
            exact
            path='/carro'
            render={(props) => <Form {...props} name='Carro' />}
          />
          <Route
            exact
            path='/Avión'
            render={(props) => <Form {...props} name='Avión' />}
          />
          <Route
            exact
            path='/Jet'
            render={(props) => <Form {...props} name='Jet' />}
          />
          <Route
            exact
            path='/Camion'
            render={(props) => <Form {...props} name='Camion' />}
          />
          <Route
            exact
            path='/Autobus'
            render={(props) => <Form {...props} name='Autobus' />}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
