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
          <button className="btn btn-success btn-sm pull-right" onClick={() => openModal()}>
            <i className="fa fa-plus"></i> Add Proxy
          </button>
          <h3 className="panel-title" style={{margin: '5px 0', fontSize: '20px'}}>
            <i className="fa fa-list"></i> Proxies
          </h3>
        </div>
        { isError &&
          <div className="panel-body">
            <h4 className="text-danger">
              <i className="fa fa-exclamation-circle"></i>{errorMessage}
            </h4>
          </div>
        }

        { (proxies.length === 0) &&
          <div className="panel-body text-center">
            <h4 className="text-warning">
              <i className="fa fa-frown-o"></i> Proxies is empty, please create one.
            </h4>
          </div>
        }

        { (! isError) && (proxies.length !== 0) &&
          <table className="table table-hover">
            <tbody>
              <tr>
                  <th>#</th>
                  <th><i className="fa fa-headphones"></i> Listen</th>
                  <th><i className="fa fa-dot-circle-o"></i> Target</th>
                  <th><i className="fa fa-pencil-square-o"></i> Edit</th>
              </tr>
              {proxies.map((proxy, index) => {
                return (
                  <tr key={index}>
                      <td>{proxy.id}</td>
                      <td>{`${proxy.listen.host}(${proxy.listen.port})`}</td>
                      <td>{`${proxy.target.host}(${proxy.target.port})`}</td>
                      <td><a href="#">Edit</a></td>
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
