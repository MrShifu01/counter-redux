import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './store/counter';
import { useState } from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState(0)

  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(incrementByAmount(Number(userInput)))
    setUserInput(0)
  }

  return (
    <div>
      <div className="App">
        <h1>{count}</h1>
      </div>
      <div className='Buttons'>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>

      <form className='Form' onClick={handleSubmit}>
        <label>
          Value:
          <input
          type='text'
          name="value"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>

    </div>
  );
}

export default App;
