import React from 'react';
import Header from '../Header/Header';
import Form from '../../containers/Form/Form';
import Footer from '../Footer/Footer';
import './App.scss';

const App = () => (
  <div className='app'>
    <Header />
    <Form />
    <Footer />
  </div>
);

export default App;
