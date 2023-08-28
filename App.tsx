import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import MainStack from './src/naviagation/MainStack';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
}

export default App;
