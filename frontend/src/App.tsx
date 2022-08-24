import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
