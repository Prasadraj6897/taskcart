import React, { Component } from 'react'
import Cart from "./components/cart"
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Cart />
        </div>
      </Provider>
    )
  }
}

export default App;



