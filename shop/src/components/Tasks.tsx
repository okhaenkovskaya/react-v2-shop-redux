import {useDispatch, useSelector} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {addTaskAction, deleteTaskAction} from "../store/tasksReducer.tsx";

interface RootState {
    tasks: {
        tasks: Task[];
    }
}

type Task = {
    title: string;
    id: string;
}

const Tasks = () => {
    const dispatch = useDispatch();
    const tasks: Task[] = useSelector((state: RootState) => state.tasks.tasks);

    const addTask = (title: string) => {
        const task: Task = {
            title,
            id: uuidv4(),
        }
        dispatch(addTaskAction(task));
    };

    const deleteTask = (taskID: string) => {
        dispatch(deleteTaskAction(taskID as string));
    };

    return (
        <div>
            <button onClick={() => addTask(prompt())}>add task</button>
            {tasks.map((task: Task) => (
                <div key={task.id}>
                    <h2>{task.title}</h2>
                    <button onClick={() => deleteTask(task.id)}>delete Like</button>
                </div>
            ))}
            <hr />
        </div>
    );
};

export default Tasks;
