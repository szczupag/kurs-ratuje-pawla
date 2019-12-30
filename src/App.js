import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <BrowserRouter
      history={history}
      basename={process.env.PUBLIC_URL}
    >
      <ScrollToTop />
      <Routes />
    </BrowserRouter>
  );
}
export default App;