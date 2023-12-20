/*
<div id="parent">
<div id="container">
<h1>iam h1</h1>
<div>
</div>
Reactelement object converted into html then browser undertsand
*/

// const heading = React.createElement(
//   'h1',
//   { className: 'test' },
//   'Hello world from React'
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
/*

header
  logo
  nav items

  body
    search
    restrocontainer
    restrocard
  footer
     copyright
     links
     address
     contact
     

 */
// const myDom = React.createElement('div', { id: 'parent' }, [
//   React.createElement('div', { id: 'child1' }, [
//     React.createElement('h1', {}, 'iam an h1 test tag'),
//     React.createElement('h2', {}, 'iam an h2 tag'),
//   ]),
//   React.createElement('div', { id: 'child2' }, [
//     React.createElement('h1', {}, 'iam an h1 tag'),
//     React.createElement('h2', {}, 'iam an h2 tag'),
//   ]),
// ]);
//const heading = React.createElement('h1', { id: 'heading' }, 'Welcome React');
const Title = () => <h1 id='heading'>Welcome React Test</h1>;
const elem = <span>react element</span>;
////const title = <h1 id='heading'>Welcome React Test {elem}</h1>;
//jsx
//functional component
const HeadingComponent = () => (
  <div className='container'>
    <h2>{100 + 200}</h2>
    <Title />
    <Title />
    <Title />
    {Title()}
    <h1>Welcome Functional Component</h1>;
  </div>
);

// const HeadingComponent2 = () => (
//   <h1 className='heading'>Welcome Functional Component</h1>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
