import {Link, Outlet} from 'react-router-dom';
import Router from './routes';

function App() {
  return (
    <div className="App">
      {/* <h1>Global h2 trest deploy</h1>
      <nav>
        <ul id="navigation">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
      </nav> */}
      <Outlet />
      <Router.GlobalRoutes />
    </div>
  );
}

export default App;
