import { useEffect } from 'react'
import TaskCard from '../components/TaskCard';
import { useTasks } from '../context/TaskContext.jsx';

function TaskPage() {

  const { tasks, obtenerTasks } = useTasks();

  useEffect(() => {
    obtenerTasks();
  }, [])

  function renderMain(){
    if(tasks.length == 0) return <h1>No task yet</h1> 
    return tasks.map(task => ( <TaskCard task={task} key={task.id}/> ))
  }

  return (
    <div className="text-white">      
      <h1 className='text-4xl text-center font-bold uppercase lg:my-5 md:my-4 sm:my-3'>Bloc de Notas</h1>
      <div className="lg:grid-cols-3 gap-2 lg:grid md:grid md:m-0 md:p-0 md:grid-cols-2 sm:block sm:px-20">
        {renderMain()}
      </div>
    </div>
  )
}

export default TaskPage
