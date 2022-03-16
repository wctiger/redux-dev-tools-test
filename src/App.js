import logo from './logo.svg';
import './App.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import showDevTools from './showDevTools';

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>      
      <div>
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        {' '}
        <button onClick={onIncrementAsync}>
          Increment after 1 second
        </button>
        <hr />
        <div>
          Clicked: {value} times
        </div>
      </div>

const store = configureStore();
const action = type => store.dispatch({type})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter
        value={store.getState().num}
        onIncrement={() => action('INCREMENT')}
        onDecrement={() => action('DECREMENT')}
        onIncrementAsync={() => action('INCREMENT_ASYNC')}/>        
      </div>
      <div>
        <button onClick={() => action('ADD')}>Click To double to the large data set</button>
      </div>
      {/* <DevTools /> */}
    </Provider>
  );
}

export default App;

// showDevTools(store);
