```tsx
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import NotFoundPage from '../pages/not-find.tsx';
import Login from '../pages/login.tsx';
import ProtectedRoutes from './protected-routes.tsx';

import ErrorPage from '@/pages/error-page.tsx';
import Root from '@/pages/root.tsx';
import { UserContext } from '@/state/user.tsx';

function LoginWrap() {
  const { isLogin } = useContext(UserContext);
  if (isLogin) {
    return <Navigate to="/" />;
  }
  return <Login />;
}

function NotFoundPageWrap() {
  const { isLogin } = useContext(UserContext);
  if (!isLogin) {
    return <Login />;
  }
  return <NotFoundPage />;
}

export function Router() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Root />} errorElement={<ErrorPage />}>
      <Route element={ <LoginWrap />} path="/login" />
      <Route element={<NotFoundPageWrap />} path="404" />
      <Route element={<ProtectedRoutes />} path="*" />
    </Route>,
  ));
  return <RouterProvider router={router} />;
}


```
