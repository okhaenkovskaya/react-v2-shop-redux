interface State {
    like: number;
}

interface Action {
    type: string;
    payload: number;
}

export const defaultStore: State = {
    like: 0,
}

const ADD_LIKE: string = "ADD_LIKE";
const DELETE_LIKE: string = "DELETE_LIKE";

export const likesReducer = (state: State = defaultStore, action: Action): State => {
    switch (action.type) {
        case ADD_LIKE:
            return {...state, like: state.like + action.payload}
        case DELETE_LIKE:
            return {...state, like: state.like - action.payload}
        default:
            return state;
    }
}

export const addLikeAction = (payload: number) => ({
    type: ADD_LIKE,
    payload
})

export const deleteLikeAction = (payload: number) => ({
    type: DELETE_LIKE,
    payload
})