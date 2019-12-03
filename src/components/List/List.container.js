import List from './List.component';
import { connect } from 'react-redux';
import { setAscendentList } from '../../state/actions/actions';


const mapStateToProps = (state) => {
  return {
    items: state.list,
    loading: state.loading,
    tempList: state.tempList
  }
}

const mapDispatchToProps = (dispatch) => ({
  tempList: (payload) => dispatch(setAscendentList(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
