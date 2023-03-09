import React from 'react'

import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

const HeaderLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default HeaderLayout