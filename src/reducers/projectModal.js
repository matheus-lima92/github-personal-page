const INITIAL_STATE = null;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SHOW_PROJECT_MODAL':
            return action.payload;
        case 'HIDE_PROJECT_MODAL':
            return INITIAL_STATE;
        default:
            return state;
    }
};