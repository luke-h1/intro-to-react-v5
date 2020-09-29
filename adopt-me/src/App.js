import React from 'react';
import { render } from 'react-dom';
import  Pet  from './Pet';
const App = () => {
  return React.createElement('div', { id: 'something important' }, [
    React.createElement('h1', {}, 'Adopt Me'),
    React.createElement(Pet, {
      name: 'luna',
      animal: 'dog',
      breed: 'havanese',
    }),
    React.createElement(Pet, {
      name: 'Pepper',
      animal: 'dog',
      breed: 'Cockatiel',
    }),
    React.createElement(Pet, {
      name: 'doink',
      animal: 'cat',
      breed: 'Mixed',
    }),
  ]);
};

render(React.createElement(App), document.getElementById('root'));
