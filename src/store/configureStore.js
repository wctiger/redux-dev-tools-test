import { createStore, applyMiddleware, compose } from 'redux';
import DevTools from '../DevTools';
import mockData from '../mock/mock.json';

const enhancer = compose(
  // Middleware you want to use in development:
//   applyMiddleware(d1, d2, d3),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

function reducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return {...state, num: state.num + 1}      
      case 'DECREMENT':
        return {...state, num: state.num - 1}
      case 'ADD':        
        return {...state, data: state.data.concat(state.data) }
      default:
        return state
    }
  }
  

export default function configureStore() {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/reactjs/redux/releases/tag/v3.1.0
  const store = createStore(reducer, { num: 0, data: [...mockData] }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  // const store = createStore(reducer, { num: 0, data: [...mockData] }, enhancer);

//   // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
//   if (module.hot) {
//     module.hot.accept('../reducers', () =>
//       store.replaceReducer(
//         require('../reducers') /*.default if you use Babel 6+ */
//       )
//     );
//   }

  return store;
}