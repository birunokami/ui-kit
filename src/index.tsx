import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import ThemeProvider from './theme/ThemeProvider';
import App from './components/app/App';
import store from './store';

import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
