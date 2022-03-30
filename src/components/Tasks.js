import Task from "./Task"

const Tasks = ({huehue, onDelete,onToggle}) => {

    return (
        <>
            {huehue.map((task) => (
                <Task key={task.id} task = {task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks