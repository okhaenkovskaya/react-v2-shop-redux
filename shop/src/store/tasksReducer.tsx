interface State {
    tasks: Task[];
}

interface Action {
    type: string;
    payload: Task | any;
}

type Task = {
    title: string;
    id: string;
}

export const defaultStore: State = {
    tasks: [],
}

const ADD_TASK: string = "ADD_TASK";
const DELETE_TASK: string = "DELETE_TASK";

export const tasksReducer = (state: State = defaultStore, action: Action): State => {
    switch (action.type) {
        case ADD_TASK:
            return {...state, tasks: [...state.tasks, action.payload]}
        case DELETE_TASK:
            return {...state, tasks: state.tasks.filter((task: Task): boolean => task.id !== action.payload)}
        default:
            return state;
    }
}

export const addTaskAction = (payload: Task) => ({
    type: ADD_TASK,
    payload
})

export const deleteTaskAction = (payload: string) => ({
    type: DELETE_TASK,
    payload
})