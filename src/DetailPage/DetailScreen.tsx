import React from 'react';
import {Provider} from 'react-redux';
import Detail from './Detail';
// import store from './store/store';

function App(): JSX.Element {
  return (
    <React.StrictMode>
      {/* <Provider store={store}> */}
       <Detail />
      {/* </Provider> */}
    </React.StrictMode>
  );
}

export default App;
