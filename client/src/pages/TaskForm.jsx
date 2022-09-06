import { Form, Formik } from 'formik'
import { useTasks } from '../context/TaskContext';
// import TaskCard from '../components/TaskCard.jsx';
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

function TaskForm() {

  const { createTask, getTask, updateTask } = useTasks();
  const params = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "" 
  });
  
  useEffect(() => {
    const obtenerTarea = async () => {
      if(params.id){
        const task = await getTask(params.id)
        setTask({
          title: task.title,
          description: task.description
        });
      }
    }

    obtenerTarea();
  }, [])

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}

        onSubmit={ async (values, actions) => {
          console.log(values)

          if(params.id){
            await updateTask(params.id, values)
          } else {
            await createTask(values);
          }

          navigate("/")
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting}) => (
          <Form onSubmit={handleSubmit} className="bg-slate-300 rounded-md text-xl p-4 max-w-md mx-auto m-5">
            <h1 className="text-2xl text-center font-bold py-2 uppercase">{params.id ? 'Actualizando Tarea' : 'Creando Tarea'}</h1>
            <label className="block py-2">Título:</label>
            <input className="w-full rounded-md px-2" type="text" name='title' placeholder='Escribe un título' onChange={handleChange}
            value={values.title}/>

            <label className="block py-2">Descripción:</label>
            <textarea className="w-full rounded-md px-2" name='description' placeholder='Escribe una descripción' row="3" onChange={handleChange}
            value={values.description}/>

            <button className="block bg-indigo-600 w-full py-2 rounded-md text-white" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : params.id ? "Actualizar" : 'Crear'}
            </button>
          </Form>
        )}
      </Formik>

      {/* <div className='col-10 mx-2'>
        { Object.keys(task).length == 0 ? <h3>No register yet</h3> : <h3>Recien registrado: <br/><TaskCard task={task} key={task.id}/></h3> }
      </div> */}

    </div>
  )
}

export default TaskForm
