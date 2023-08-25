import { Fragment } from 'react';
import {Routes, Route} from 'react-router-dom';
import Blogs from '../pages/Blogs'
import Products from '../pages/Products'
import Login from '../pages/Login'
import {DefaultLayout} from '../Layout';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';

function GlobalRoutes() {
  const privateRoutes = [
    {path: 'blogs/*', component: Blogs},
    {path: 'products/*', component: Products},
  ]
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} >
        {
          privateRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : DefaultLayout; 
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
          })
        }
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<DefaultLayout><NotFound /></DefaultLayout>} />
    </Routes>
  )
}

export default GlobalRoutes;