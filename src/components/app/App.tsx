import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../layout/Layout';

const App: FC = () => {
  return (
    <div data-testid="app-container">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<div>Home page</div>} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
