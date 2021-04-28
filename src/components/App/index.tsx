import React from 'react';
import Form from 'src/containers/Form';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import './styles.scss';

const App = () => (
  <div className='app'>
    <Header />
    <Form />
    <Footer />
  </div>
);

export default App;
