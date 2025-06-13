import { ADD_TODO, TOGGLE_TODO } from '../actions/todoActions';

const initialState = [];

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { text: action.payload, completed: false }];
        case TOGGLE_TODO:
            return state.map((todo, index) =>
                index === action.payload ? { ...todo, completed: !todo.completed } : todo);
        default:
            return state;
    }
};

export default todoReducer;
