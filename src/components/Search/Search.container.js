import Search from './Search.component';
import { connect } from 'react-redux';
import { getLocations } from '../../state/actions/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  getLocations: (payload) => dispatch(getLocations(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);