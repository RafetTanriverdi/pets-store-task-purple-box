import './App.scss';
import Login from './Components/Login';
import Register from './Components/Register';
import { Routes, Route } from 'react-router-dom';
import ProjectedRoutes from './Services/ProjectedRoutes';
import Pets from './Pages/Pets';
import Store from './Pages/Store';
import Analysis from './Pages/Analysis';
import HomePage from './Components/HomePage';
import HeaderLayout from './Services/HeaderLayout';

function App() {



  return (
    <>

      <Routes>
        <Route path='/' element={<ProjectedRoutes />}>
          <Route path='/' element={<HeaderLayout />}>

            <Route path='/' element={<HomePage />} />
            <Route path='/pets' element={<Pets />} />
            <Route path='/store' element={<Store />} />
            <Route path='/analysis' element={<Analysis />} />
          </Route>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>

    </>
  );
}

export default App;
