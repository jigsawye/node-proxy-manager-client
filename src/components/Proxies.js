import React, { Component, PropTypes } from 'react';

export default class Proxies extends Component {

  static propTypes = {
    proxies: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
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
    const { isLoading, isError, errorMessage, proxies } = this.props;

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="panel-title">Proxies</div>
        </div>
        { isLoading &&
          <div className="panel-body text-center">
            <i className="fa fa-circle-o-notch fa-spin fa-4x"></i>
          </div>
        }

        { isError &&
          <div className="panel-body">
            <i className="fa fa-exclamation-circle"></i>{errorMessage}
          </div>
        }

        { (! isLoading) && (! isError) &&
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
