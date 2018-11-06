import {createStore} from 'redux'

const initialState = {
    username: '',
    messagesArray: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            state = { ...state, username: action.username};
        break;
        case 'CREATE_MESSAGE':
            state = { ...state,
                messagesArray: [...state.messagesArray, action.messageObject]
            };
            break;
        default:
            return state;
    }
    return state;
}

const store = createStore(reducer);

export default store;