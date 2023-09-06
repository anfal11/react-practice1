// conditional rendering

export default Todo;

function Todo ({task, isDone}) {
    return (
       
        // <li>Task: {task}, Done: {isDone ? "Yes" : "No"} 
        // </li>

        // if (isDone) {
        //     return <li>Finished: {task}</li>
        // }
        //  else   {
        //     return <li>Working on: {task}</li>
        //  }
        // this ternary is the shortcut off above condition
        <li> {isDone ? `Finished` : `Working on`} : {task}</li>
        
    )
}

// another way to export

// export default function Todo () {
//     return (
//         <li>Todo</li>
//     )
// }