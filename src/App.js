import logo from './logo.svg';
import './App.css';
import React from 'react';

// class ClassNumbers extends React.Component {
  
//   render() {
//     console.log(this.props.nums);
//     return <ul>  
      
//     </ul>
//   }
// }

function Numbers(props) {
  const numbers = props.numbers
  const numbersLi = numbers.map(number => (<li className="cos" key={number}> {number} </li>) );
  const numbersDouble = numbers.map((number) => (<li key={number}>{number * 2}</li>));
  return (
    <div className="numbers">
      <ul> 
          {numbersLi}
      </ul>
      <ul>
          {numbersDouble}
      </ul>
    </div>
  )
} 

function App() {
  const numbers = [1, 2, 3, 4]
  
  return (
    <div className="app">
      {/* <ClassNumbers  nums={numbers}/> */}
      <Numbers numbers={numbers} />
     </div>
  );
}

export default App;
