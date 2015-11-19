import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
import { logout } from '../actions/auth';
import { isLogined } from '../utils/auth';

function mapStateToProps(state) {
  return {
    isLogined: isLogined(),
    username: state.auth.username,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
