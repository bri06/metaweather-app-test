import List from './List.component';
import { connect } from 'react-redux';
import { setAscendentList } from '../../state/actions/actions';


const mapStateToProps = (state) => {
  return {
    items: state.list,
    loading: state.loading,
  }
}

const mapDispatchToProps = (dispatch) => ({
  setAscendentList: (id, items) => dispatch(setAscendentList(id, items))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
