import React from 'react'
import {Link} from 'react-router-dom';

function ListBlogs() {
  return (
    <div>
      <nav>
        <h2>menu</h2>
        <ul id="navigation">
            <li>
                <Link to="categories">Categories</Link>
            </li>
            <li>
                <Link to="add">Add</Link>
            </li>
        </ul>
      </nav>


      <nav>
        <h2>detail</h2>
        <ul id="navigation">
            <li>
                <Link to="1">Detail 1</Link>
            </li>
            <li>
                <Link to="2">Detail 2</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default ListBlogs