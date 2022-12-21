import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import UseCounter from '../pages/UseCounter';


// let ErrorBoundary = lazy(() => import('../components/ErrorBoundary'));
let ErrorPage = lazy(() => import('../pages/Error404'));
 let Home = lazy(() => import('../pages/Home'));
let UseReducer = lazy(() => import('../pages/UseReducer'));

let UseCounter = lazy(() => import('../pages/UseCounter'));

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/UseCounter" element={<UseCounter/>} />
    <Route path="/UseReducer" element={<UseReducer/>}/>
      
    {/* <Route path="/ErrorBoundary" element={<ErrorBoundary />} /> */}
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AppRouter;
