import { createSelector } from 'reselect';

const returnMonitoringState = (state) => state.monitoring;

export const isAlive = createSelector(
    [ returnMonitoringState ],
    (monitoring) => {
        return monitoring.isAlive;
    }
);

export const lastUpdated = createSelector(
    [ returnMonitoringState ],
    (monitoring) => {
        return monitoring.lastUpdated;
    }
);

export const updateStatus = createSelector(
    [ returnMonitoringState ],
    (monitoring) => {
        return monitoring.updateStatus;
    }
);
