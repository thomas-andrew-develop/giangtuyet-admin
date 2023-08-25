import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {publicRoutes} from './routes';
import {DefaultLayout} from './component/Layout/';
import { Fragment } from 'react';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Global h1</h1>
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Layout = route.layout === null ? Fragment : DefaultLayout; 
              const Page = route.component;
              return <Route key={index} path={route.path} exact element={<Layout><Page /></Layout>} />
            })
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
