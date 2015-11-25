import React, { Component, PropTypes } from 'react';
import { Notifs } from 're-notif';
import Navigation from './Navigation';

export default class Main extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired,
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <Navigation {...this.props}/>
            <Notifs theme={{successClasses: 'alert alert-success notif', dangerClasses: 'notif-danger'}} />
            {/* this will render the child routes */}
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
