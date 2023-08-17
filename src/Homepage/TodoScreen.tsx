import React from 'react';
import {Provider} from 'react-redux';
import Todo from './Todo/Todo';
import store from './store/store';

function TodoScreen(): JSX.Element {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Todo />
      </Provider>
    </React.StrictMode>
  );
}

export default TodoScreen;
