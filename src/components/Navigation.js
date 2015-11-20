import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {

  static propTypes = {
    isLogined: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    updatePath: PropTypes.func.isRequired,
  }

  handleLogout() {
    const { logout, updatePath, isLogined } = this.props;
    if (isLogined) {
      logout();
      updatePath('/login');
    }
  }

  render() {
    const { isLogined } = this.props;

    return (
      <nav className="navbar navbar-default">
          <div className="navbar-header">
            <Link to="/proxies" className="navbar-brand">Proxy Manager</Link>
          </div>

          <div className="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              { isLogined ? <p className="navbar-text">Auth Success</p> : null }
              { isLogined ? <li><a href="#" onClick={::this.handleLogout}>Logout</a></li> : null }
            </ul>
          </div>
      </nav>
    );
  }
}
