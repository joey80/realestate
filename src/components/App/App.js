import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;