import { Routes, Route } from 'react-router-dom'

import TaskPage from './pages/TaskPage.jsx';
import TaskForm from './pages/TaskForm.jsx';
import NotFound from './pages/NotFound.jsx';
import Navbar from './components/Navbar.jsx';

import { TaskContextProvider } from './context/TaskContext.jsx';

function App() {
  return (
    <div className='bg-zinc-900 h-screen'>
      <Navbar />
      <div className="container mx-auto">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TaskPage />} />
            <Route path="/vite-react-taksapp/" element={<TaskPage />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>

  );
}

export default App

