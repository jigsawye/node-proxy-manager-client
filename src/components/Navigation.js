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
              { isLogined &&
                <p className="navbar-text" style={{color: '#28b62c'}}>
                  <i className="fa fa-check-circle"></i>Auth Success
                </p> }
              { isLogined &&
                <li>
                  <a href="#" onClick={::this.handleLogout}>
                    <i className="fa fa-sign-out"></i>Logout
                  </a>
                </li> }
            </ul>
          </div>
      </nav>
    );
  }
}
