import React from 'react'
import Buttons from './Buttons'

function TaskCard({task}) {

  const sliceDate = (date) => {
    let da = (date).toString().slice(0,10);
    return da;
  }

  return (
    <div key={task.id} className="bg-slate-700 rounded-md p-4 lg:my-0 md:my-0 sm:my-2">
      <header className="flex justify-between">
        <h2 className="text-xl font-bold">{task.title}</h2>
        <span>{task.done == 1 ? "✅" : "❌"}</span>
      </header>
        <p className="text-md">{task.description}</p>
        <h3 className='my-3'>Creado el: <strong>{sliceDate(task.created_at)}</strong></h3>
        { task.action ? null : <Buttons id={task.id} /> }
    </div>
  )
}

export default TaskCard
