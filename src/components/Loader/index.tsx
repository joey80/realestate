import React from 'react';
import './styles.scss';

const Loader = () => (
  <div className='loader'>
    <div className='loader__blocks' style={{ width: '100%', height: '100%' }}>
      <div style={{ left: '38px', top: '38px', animationDelay: '0s' }} />
      <div style={{ left: '80px', top: '38px', animationDelay: '0.125s' }} />
      <div style={{ left: '122px', top: '38px', animationDelay: '0.25s' }} />
      <div style={{ left: '38px', top: '80px', animationDelay: '0.875s' }} />
      <div style={{ left: '122px', top: '80px', animationDelay: '0.375s' }} />
      <div style={{ left: '38px', top: '122px', animationDelay: '0.75s' }} />
      <div style={{ left: '80px', top: '122px', animationDelay: '0.625s' }} />
      <div style={{ left: '122px', top: '122px', animationDelay: '0.5s' }} />
    </div>
  </div>
);

export default Loader;
