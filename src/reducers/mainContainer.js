const INITIAL_STATE = 'contact';

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CHANGE_SCREEN':
            return action.payload;
        default:
            return state;
    }
}