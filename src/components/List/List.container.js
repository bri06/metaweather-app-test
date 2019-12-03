import List from './List.component';
import { connect } from 'react-redux';
import { setOrdererList } from '../../state/actions/actions';

const mapStateToProps = (state) => {
  return {
    items: state.list,
    loading: state.loading,
  }
}

const mapDispatchToProps = (dispatch) => ({
  setOrdererList: (id, items, selected) => dispatch(setOrdererList(id, items, selected))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
