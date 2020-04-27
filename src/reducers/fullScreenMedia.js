const INITIAL_STATE = '';

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SHOW_FULL_SCREEN_MEDIA':
            return action.payload;
        case 'HIDE_FULL_SCREEN_MEDIA':
            return INITIAL_STATE;
        default:
            return state;
    }
};