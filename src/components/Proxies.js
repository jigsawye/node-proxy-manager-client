import React, { Component, PropTypes } from 'react';
import ProxyModal from './ProxyModal';

export default class Proxies extends Component {

  static propTypes = {
    proxies: PropTypes.array.isRequired,
    isError: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    proxiesRequest: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { proxiesRequest } = this.props;
    proxiesRequest();

    this.updateProxies = setInterval(() => {
      proxiesRequest();
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.updateProxies);
  }

  render() {
    const { isError, errorMessage, proxies, openModal } = this.props;

    return (
      <div className="panel panel-default">
        <div className="panel-heading clearfix" style={{padding: '5px 10px'}}>
          <button className="btn btn-success btn-sm pull-right" onClick={() => openModal()}>Add Proxy</button>
          <h3 className="panel-title" style={{margin: '5px 0', fontSize: '20px'}}>Proxies</h3>
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
        <ProxyModal {...this.props}/>
      </div>
    );
  }
}
