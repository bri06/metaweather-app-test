import List from './List.component';
import { connect } from 'react-redux';
import { setOrdererList, filteredClimate } from '../../state/actions/actions';

const mapStateToProps = (state) => {
  return {
    items: state.list,
    loading: state.loading,
  }
}

const mapDispatchToProps = (dispatch) => ({
  setOrdererList: (id, items, selected) => dispatch(setOrdererList(id, items, selected)),
  filteredClimate: (id, tempArray) => dispatch(filteredClimate(id, tempArray))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
