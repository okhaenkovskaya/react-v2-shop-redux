import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import {likesReducer} from "./likesReducer.tsx";
import {tasksReducer} from "./tasksReducer.tsx";

const rootReducer = combineReducers({
    likes: likesReducer,
    tasks: tasksReducer
})

export const store = createStore(rootReducer, composeWithDevTools())