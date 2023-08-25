import React from 'react'
import {Outlet} from 'react-router-dom';
import BlogRoute from '../../routes/blogRouter';
import ListBlogs from './ListBlogs';
function Blogs() {
  return (
    <>
      <ListBlogs />
      <BlogRoute />
      <Outlet />
    </>
  )
}

export default Blogs