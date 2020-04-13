const INITIAL_STATE = null;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SHOW_JOB_MODAL':
            return action.payload;
        case 'HIDE_JOB_MODAL':
            return INITIAL_STATE;
        default:
            return state;
    }
}