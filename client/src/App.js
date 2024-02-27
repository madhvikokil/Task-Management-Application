import Header from './component/header';
import { Route, Routes } from 'react-router';
import Dashboard from './container/dashboard';
import './App.css';
import Tasks from './container/tasks';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/tasks/:id" element={<Tasks />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
