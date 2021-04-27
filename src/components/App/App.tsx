import React from 'react';
import Form from 'src/containers/Form/Form';
import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header/Header';
import './App.scss';

const App = () => (
  <div className='app'>
    <Header />
    <Form />
    <Footer />
  </div>
);

export default App;
