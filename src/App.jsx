import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Public from './components/Public.jsx';
import Login from './components/Login.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
