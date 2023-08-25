import AddBlog from '../pages/Blogs/AddBlog';
import BlogDetail from '../pages/Blogs/BlogDetail';
import CategoriesBlog from '../pages/Blogs/CategoriesBlog';
import {Routes, Route} from 'react-router-dom';

function BlogRoutes() {
  const blogsRoutes = [
    {path: ':id', component: BlogDetail},
    {path: 'add', component: AddBlog},
    {path: 'categories', component: CategoriesBlog},
  ]
  return (
    <Routes>
      {
        blogsRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />
        })
      }
    </Routes>
  )
}

export default BlogRoutes;