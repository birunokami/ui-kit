import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <div id="layoutWrapper">
      <Outlet />
    </div>
  );
};

export default Layout;
