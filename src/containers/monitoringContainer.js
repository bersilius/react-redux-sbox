import { connect } from 'react-redux';
import { isAlive, lastUpdated, updateStatus } from '../selectors/monitoring';
import MonitoringState from '../components/monitoringState';
import { monitoring } from '../actions/monitoring';

const mapStateToProps = (state) => {
    return {
        isAlive: isAlive(state),
        lastUpdated: lastUpdated(state),
        updateStatus: updateStatus(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRefreshClick: () => {
            dispatch(monitoring());
        }
    };
};

const MonitoringContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MonitoringState);

export default MonitoringContainer;
