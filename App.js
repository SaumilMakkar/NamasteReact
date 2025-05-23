import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    'div',
    { id: 'parent' },
    [
      React.createElement(
        'div',
        { id: 'child' },
        [
          React.createElement('h1', {}, 'This is Namaste React'),
          React.createElement('h2', { id: 'child2' }, 'I am an h2 tag')
        ]
      ),
      React.createElement(
        'div',
        { id: 'child2' },
        [
          React.createElement('h1', {}, 'I am an h1 tag'),
          React.createElement('h2', { id: 'child2' }, 'I am an h2 tag')
        ]
      )
    ]
  );
  
   
console.log(parent);//object
//React Element



const heading=React.createElement('h1',{id:"heading",xyz:"abc"},"Hello World from React");


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);