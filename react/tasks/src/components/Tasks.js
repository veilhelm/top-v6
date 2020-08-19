import React, { useState, useContext } from 'react';
import { TasksContext } from '../store/TasksContext';

// class Tasks extends React.Component {
  //Alternative 1: Render Props. Works on classes and functions

  // render() {
  //   return (
  //     <TasksContext.Consumer>
  //       {(value) => {
  //         console.log(value);
  //         return (
  //           <div className="tasks">
  //             {value.tasks.map(task => (
  //               <div className="task" key={task.id}>
  //                 <h1>{task.title}</h1>
  //               </div>
  //             ))}
  //           </div>
  //         )
  //       }}
  //     </TasksContext.Consumer>
  //   )
  // }

  // Alternative 2: contextType. Only works on classes, and only once.

  // static contextType = TasksContext;

//   render() {
//     return (
//       <div className="tasks">
//         {this.context.tasks.map(task => (
//           <div className="task" key={task.id}>
//             <h1>{task.title}</h1>
//           </div>
//         ))}
//       </div>
//     )
//   }
// }

// export { Tasks };

export function Tasks() {
  // Alternative 3: context hook. Only works on functions
  const tasksContext = useContext(TasksContext);
  // const { tasks } = useContext(TasksContext);

  console.log(tasksContext)

  return (
    <div className="tasks">
      {tasksContext.tasks.map(task => (
        <div className="task" key={task.id}>
          <h1>{task.title}</h1>
        </div>
      ))}
    </div>
  )
}
