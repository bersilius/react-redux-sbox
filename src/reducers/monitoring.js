const initialState = {
    isAlive: false,
    lastUpdated: Date.now(),
    updateStatus: false
};

const monitoring = (state = initialState, action) => {
    switch (action.type) {
        case 'CHECK_ISALIVE':
            return Object.assign({}, state, {
                updateStatus: true
            });
        case 'SET_ALIVE_STATE':
            return Object.assign({}, state, {
                isAlive: action.isAlive,
                lastUpdated: action.lastUpdated,
                updateStatus: false
            });
        default:
            return state;
    }
};

export default monitoring;
