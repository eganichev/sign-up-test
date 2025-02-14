import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageNotFound } from './components';
import { Home, RoomDetails, SignUp } from './pages';
import { MainLayout } from './layouts';
import { ToastContainer } from 'react-toastify';

const App = () => {
  // const paths = [
  //   { path: '/', element: <Home /> },
  //   { path: '/room/:id', element: <RoomDetails /> },
  //   { path: '*', element: <PageNotFound /> },
  // ]

  // const router = createBrowserRouter(paths);
  // <RouterProvider router={router} />

  return (
    <main className=''>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MainLayout />}>
            <Route path={'/'} element={<Home />} />
            <Route path={'/room/:id'} element={<RoomDetails />} />
            <Route path={'*'} element={<PageNotFound />} />
          </Route>

          <Route path={'/sign-up'} element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
