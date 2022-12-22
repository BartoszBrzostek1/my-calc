import './App.css';
import React, { useState } from 'react';
/* eslint no-eval: 0 */

function App() {
  const [data, setData] = useState("");

  return (
    <div className="App">
      <div>
        <button onClick={e => { setData(data + e.target.value)}}
        value = {0}
        >0
        </button>
        <button onClick={e => { setData(data + e.target.value)}}
        value = {1}
        >1
        </button>
        <button onClick={e => { setData(data + e.target.value)}}
        value = {2}
        >2
        </button>
        <button onClick={e => { setData(data + e.target.value)}}
        value = {3}
        >3
        </button>
        <button onClick={e => { setData(data + e.target.value)}}
        value = {4}
        >4
        </button>
        <button onClick={e => { setData(data + e.target.value)}}
        value = {5}
        >5
        </button>
        <button onClick={e => { setData(data + e.target.value)}}
        value = {6}
        >6
        </button>
        <button onClick={e => { setData(data + e.target.value)}}
        value = {7}
        >7
        </button>
        <button onClick={e => { setData(data + e.target.value)}}
        value = {8}
        >8
        </button>
        <button onClick={e => { setData(data + e.target.value)}}
        value = {9}
        >9
        </button>
        <button onClick={() => { setData(data.substr(0, data.length - 1))}}
        >Back
        </button>
        <button onClick={() => { setData("")}}
        >Clear
        </button>
      </div>
      <div>
        <button onClick={e => { setData(data + e.target.value)}}
          value = "+"
          >+
        </button>
        <button onClick={e => { setData(data + e.target.value)}}
          value = "-"
          >-
        </button>
        <button onClick={e => { setData(data + e.target.value)}}
          value = "*"
          >*
        </button>
        <button onClick={e => { setData(data + e.target.value)}}
          value = "/"
          >/
        </button>
        <button onClick={e => {
          try {
            setData(
              String(eval(data)).length > 3 && String(eval(data)).includes(".") ? String(eval(data).toFixed(4)) : String(eval(data))
            )
          }
          catch(error) {
            console.log(error)
          }
        }} 
        value= "=" 
        > =
        </button>
      </div>
      <div>
        {data}
      </div>
    </div>
  );
}

export default App;
