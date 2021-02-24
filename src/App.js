import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const singer =['sumon', 'anjan', 'anupom', 'rupom'];
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.09'},
    {name: 'PDF Reader', price: '$8.99'}
  ]
    // const productNames = products.map(product => product.name)
    // console.log(productNames)
    
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            singer.map(singer=> <li>{singer}</li>)
          }
          {
            products.map(product=> <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(productvalue=><Product product={productvalue}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        <Person name= 'Sid Barret' band= 'Pink Floyd' song= 'comfortably numb'></Person>
        <Person name= 'Jhon Lenon' band= 'Beatles' song= 'Yesterday'></Person>
        <Person name= 'shibu Kumar shil' band= 'Meghdol' song= 'Esho amar shohore'></Person>
        <Person name = {singer[0]} song= 'tomake chai'></Person>
        
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease= ()=> setCount(count + 1) ;
  return (
    <div>
      <h1>Count: {count}</h1>
      {/* <button onClick={handleIncrease}>Increase</button> */}
      <button style={{color:'green'}} onMouseMove={()=> setCount(count + 1)}>Increase</button>
      <button style={{color:'red'}} onClick={()=> setCount(count - 1)}>Decrease</button>
    </div>
  )
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'Left'
  }
  const {name, price} =props.product;
 
  return (
    <div style= {productStyle}>
<h3>{name} </h3>
<h5>{price}</h5>
<button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border: '2px solid gray',
    margin: '10px',
    backgroundColor: 'green'
  }
  return (<div style={{border:'2px solid yellow', margin:'10px', padding:'10px', width:'500px'}}>
  <h2 style={{color: 'blue'}}>Name: {props.name} </h2>
  <h3>Band: {props.band}</h3>
  <h4 style= {personStyle}>Song: {props.song}</h4>
  </div>)
  
}

export default App;
