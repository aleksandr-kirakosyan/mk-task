import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import GroupList from './components/GroupList';
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GroupList />
      </div>
    </Provider>
  );
}

export default App;
