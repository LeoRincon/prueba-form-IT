import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from '../components/layout';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch></Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
