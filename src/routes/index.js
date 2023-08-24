import Dashboard from '../pages/Dashboard'
import Blogs from '../pages/Blogs'
import Login from '../pages/Login'

export const publicRoutes = [
  {path: '/', component: Dashboard},
  {path: '/blogs', component: Blogs},
  {path: '/login', component: Login, layout: null}
]

export const privateRoutes = [

]