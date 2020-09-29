import React from 'react';
import { render } from 'react-dom';
const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed),
  ]);
};

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
