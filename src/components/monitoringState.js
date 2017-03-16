import React, { PropTypes } from 'react';

const MonitoringState = ({ isAlive, updateStatus, lastUpdated, onRefreshClick }) => (
    <div>
        <div>{ `isAlive: ${isAlive}` }</div>
        <div>{ `updateStatus: ${updateStatus}` }</div>
        <div>{ `lastUpdated: ${new Date(lastUpdated).toLocaleString()}` }</div>
        <button onClick={ () => onRefreshClick() } disabled={updateStatus} >Update</button>
    </div>
);

MonitoringState.propTypes = {
    isAlive: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number.isRequired,
    updateStatus: PropTypes.bool.isRequired,
    onRefreshClick: PropTypes.func.isRequired
};

export default MonitoringState;
