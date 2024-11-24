import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Men from './pages/Men';
import Login from './pages/Login'; // Match case of filename
import Allshoe from './pages/Allshoe';


 // Ensure file exists and matches name
import 'bootstrap/dist/css/bootstrap.min.css';
export default  function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Men" element={<Men />} />
          <Route path="Allshoe" element={<Allshoe />} />
          <Route path="Login" element={<Login />} />
   
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
