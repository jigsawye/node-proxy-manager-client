import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';

export default class Main extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired,
    isLogined: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  }

  handleLogout() {
    const { logout, history, isLogined } = this.props;
    if (isLogined) {
      logout();
      history.replaceState(null, '/login');
    }
  }

  render() {
    const { isLogined } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                  <IndexLink to="/" className="navbar-brand">Proxy Manager</IndexLink>
                </div>

                <div className="navbar-collapse">
                  <ul className="nav navbar-nav navbar-right">
                    { isLogined ? <p className="navbar-text">Auth Success</p> : null }
                    { isLogined ? <li><a href="#" onClick={::this.handleLogout}>Logout</a></li> : null }
                  </ul>
                </div>
            </nav>
            {/* this will render the child routes */}
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
