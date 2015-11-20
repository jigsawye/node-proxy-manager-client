import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Proxies from '../components/Proxies';
import * as ProxyActions from '../actions/proxy';

function mapStateToProps(state) {
  return state.proxy;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProxyActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Proxies);
