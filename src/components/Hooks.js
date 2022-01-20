import React,{useState} from 'react';

const Hooks = () => {

    const [count,setCount] = useState(0)
  return <div>
    <h1>Managing state with Hooks.</h1>
    <h1>{count}</h1>
    <button onClick={() => setCount(1000)}>UP</button>
  </div>
}

export default Hooks;
