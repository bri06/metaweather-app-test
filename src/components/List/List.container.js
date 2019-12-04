import List from './List.component';
import { connect } from 'react-redux';
import { setOrdererList, filteredClimate, getAllClimate } from '../../state/actions/actions';

const mapStateToProps = (state) => {
  return {
    items: state.list,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => ({
  setOrdererList: (id, items, selected) => dispatch(setOrdererList(id, items, selected)),
  filteredClimate: (id, woeidTemp, tempArray) => dispatch(filteredClimate(id, woeidTemp, tempArray)),
  getAllClimate: (woeidTemp, tempArray) => dispatch(getAllClimate(woeidTemp, tempArray))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
