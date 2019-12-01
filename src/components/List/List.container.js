import List from './List.component';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    items: state.list
  }
}

export default connect(
  mapStateToProps
)(List);
