import './App.css';
import { useState } from 'react';

function App() {
  
  const [count, setCount] = useState(0);

  return (
    <main className="main">
      <div className="text">
        <h1>Count: {count}</h1>
        {/* <h1><code>{count}</code></h1> */}
        <div className="button-layer">
        <button className='button' style={{width: 50, height: 50, cursor: 'pointer'}} onClick={() => setCount(count + 1)}>
          <p className="add" style={{margin: 0, color: 'white'}}>+</p>
        </button>   
        <button className='button' style={{width: 50, height: 50, cursor: 'pointer'}} onClick={() => setCount(count - 1)}>
          <p className="add" style={{margin: 0, color: 'white'}}>-</p>
        </button>   
          </div>
      </div>
    </main>
  );
}

export default App;
