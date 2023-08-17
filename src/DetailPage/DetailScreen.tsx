import React from 'react';
import {Provider} from 'react-redux';
import Detail from './Detail';
import onHomepage from './Detail';
// import store from './store/store';

function DetailScreen(): JSX.Element {
  return (
    <React.StrictMode>
      {/* <Provider store={store}> */}
      <Detail />
      {/* </Provider> */}
    </React.StrictMode>
  );
}

export default DetailScreen;
