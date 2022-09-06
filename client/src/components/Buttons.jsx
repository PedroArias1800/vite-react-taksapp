import { useTasks } from '../context/TaskContext'
import { useNavigate } from 'react-router-dom'

function Buttons(task) {

    const { deleteTask, updateToggleTask } = useTasks();
    const navigate = useNavigate();

    const handleToggle = async (id) => {
        await updateToggleTask(id);
    } 

    return (
        <div className='flex gap-2 my-1'>
            <button className='bg-slate-600 py-1 px-2 rounded-md' onClick={() => navigate(`/edit/${task.id}`)}>Editar</button>
            <button className='bg-red-600 py-1 px-2 rounded-md' onClick={() => deleteTask(task.id)}>Eliminar</button>
            <button className='bg-green-600 py-1 px-2 rounded-md' onClick={() => handleToggle(task.id)}>Alternar Estado</button>
        </div>
    )
}

export default Buttons
