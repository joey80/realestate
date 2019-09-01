import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Form from '../../containers/Form/Form';
import Footer from '../Footer/Footer';

const App = () => (
  <div className="app">
    <Header />
    <Form />
    <Footer />
  </div>
);

export default App;