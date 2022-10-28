import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

let About = lazy(() => import('../pages/About'));
let ErrorPage = lazy(() => import('../pages/ErrorPage'));
let Home = lazy(() => import('../pages/Home'));
let Electoral = lazy(() => import('../pages/Electoral'));
let NewVoters = lazy(() => import('../pages/NewVoters'));
let Users = lazy(() => import('../pages/Users'));


const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/users" element={<Users users={Users}/>} />
    <Route path="/Electoral" element={<Electoral />}>
      <Route path=":new" element={<NewVoters />} />
    </Route>
    <Route path="/about" element={<About />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AppRouter;
