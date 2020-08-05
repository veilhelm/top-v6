import React from 'react';

function Tasks({
  tasks,
  completeTask,
  deleteTask
}) {
  return tasks.map((task) => {
    return (
      <div key={task.id} className={`task-${task.id}`}>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <span>{task.done ? 'Completed' : 'In progress'}</span>
        {!task.done ?
          <button onClick={completeTask(task.id)}>Complete</button> :
          <span>Congrats</span>
        }
        <button onClick={deleteTask(task.id)}>Delete task</button>
      </div>
    );
  });

  // return [
  //   <div key={0} className={`task-${0}`}>
  //     <h2>task 1</h2>
  //     <span></span>
  //   </div>,
  //   <div key={1} className={`task-${1}`}>
  //     <h2>task 2</h2>
  //     <span></span>
  //   </div>,
  //   <div key={2} className={`task-${2}`}>
  //     <h2>task 3</h2>
  //     <span></span>
  //   </div>
  // ]
}

// export default Tasks;
export { Tasks };
