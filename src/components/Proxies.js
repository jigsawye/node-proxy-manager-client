import React, { Component, PropTypes } from 'react';

export default class Proxies extends Component {

  static propTypes = {
    proxies: PropTypes.array.isRequired,
    isError: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    proxiesRequest: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { proxiesRequest } = this.props;
    proxiesRequest();

    setInterval(() => {
      proxiesRequest();
    }, 10000);
  }

  render() {
    const { isError, errorMessage, proxies } = this.props;

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="panel-title">Proxies</div>
        </div>
        { isError &&
          <div className="panel-body">
            <i className="fa fa-exclamation-circle"></i>{errorMessage}
          </div>
        }

        { (! isError) &&
          <table className="table table-hover">
            <tbody>
              <tr>
                  <th>#</th>
                  <th>listen</th>
                  <th>target</th>
                  <th>more</th>
              </tr>
              {proxies.map((proxy, index) => {
                return (
                  <tr key={index}>
                      <td>{proxy.id}</td>
                      <td>{`${proxy.listen.host}(${proxy.listen.port})`}</td>
                      <td>{`${proxy.target.host}(${proxy.target.port})`}</td>
                      <td><a href="#">more</a></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        }
      </div>
    );
  }
}
