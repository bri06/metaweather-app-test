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
  setAscendentList: (id, items, selected) => dispatch(setAscendentList(id, items, selected))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
