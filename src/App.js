import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router
      history={history}
    >
      <ScrollToTop />
      <Routes />
    </Router>
  );
}
export default App;