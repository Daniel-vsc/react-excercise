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
      <h2> Liczby </h2> 
      <ul> 
          {numbersLi}
      </ul>
      <h2>Podwojone </h2>
      <ul>
          {numbersDouble}
      </ul>
    </div>
  )
} 


class EvenNumbers extends React.Component {
  render() {

    const numbers = this.props.numbers
    console.log(numbers)
    const numbersFiltered = numbers.filter(number => number % 2 === 0).map(number => <li key={number}>{number}</li>)
    console.log(numbersFiltered)
    return (
      <div>
        <h2>Tylko parzyste </h2> 
        <ul>
          {numbersFiltered}
        </ul>
      </div>
    )
  }
}

function EvenNumbersConditional(props) {
  const numbers = props.numbers;
  const numbersLi = numbers.map(number => number % 2 === 0 && <li key={number}>{number}</li>)

  const showMessage = numbers.length > 0; // false
  return (
    <div>
      {showMessage && <h2> Tylko parzyste (conditional)</h2>}
      <ul>
        {numbersLi}
      </ul>
    </div>
  )
}

function App() {
  const numbers = [3, 5, 7]
  
  return (
    <div className="app">
      {/* <ClassNumbers  nums={numbers}/> */}
      <Numbers numbers={numbers} />
      <EvenNumbers numbers={numbers}/>
      <EvenNumbersConditional numbers={numbers}/>
     </div>
  );
}

export default App;
