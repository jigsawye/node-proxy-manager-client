import React, { Component, PropTypes } from 'react';

export default class LoginForm extends Component {

  static propTypes = {
    loginSubmit: PropTypes.func.isRequired,
    isLoginSubmitting: PropTypes.bool.isRequired,
    loginFail: PropTypes.bool.isRequired,
    loginFailMessage: PropTypes.string.isRequired,
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const { loginSubmit } = this.props;

    loginSubmit({
      username: this.refs.username.value,
      password: this.refs.password.value,
    });
  }

  render() {
    const { isLoginSubmitting, loginFail, loginFailMessage } = this.props;

    return (
      <div className="panel panel-default">
        <div className="panel-heading">Login</div>
        <div className="panel-body">
          <form className="form-horizontal" onSubmit={::this.handleFormSubmit}>

            {loginFail ? <div className="alert alert-danger">{loginFailMessage}</div> : null}

            <div className="form-group">
              <label htmlFor="username" className="col-sm-2 control-label">Username</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="username" ref="username" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="col-sm-2 control-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="password" ref="password" />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-10 col-sm-offset-2">
                <button type="submit" className="btn btn-primary" disabled={isLoginSubmitting}>
                {/** isLoginSubmitting ? <i className="fa fa-circle-o-notch fa-spin"></i> : null **/}
                Login
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}
