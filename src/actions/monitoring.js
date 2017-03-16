const config = require('../config');

export const CHECK_ISALIVE = 'CHECK_ISALIVE';
function checkIsAlive() {
    return {
        type: CHECK_ISALIVE
    };
}

export const SET_ALIVE_STATE = 'SET_ALIVE_STATE';
function setAliveState(result) {
    return {
        type: SET_ALIVE_STATE,
        isAlive: result.response,
        lastUpdated: Date.now(),
        updateStatus: false
    };
}

export function monitoring() {
    return dispatch => {
        dispatch(checkIsAlive());

        return fetch(`http://${config.rest.host}:${config.rest.port}/rest/monitoring/isAlive`, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
            .then(result => {
                return result.json();
            })
            .then(json => {
                dispatch(setAliveState(json));
            })
            .catch(err => {
                dispatch(setAliveState({ response: false }));
            });
    };
}
