import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import * as AuthActions from '../actions/auth';


function mapStateToProps(state) {
  return state.auth;
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(AuthActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
