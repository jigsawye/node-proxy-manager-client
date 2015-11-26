import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('root'));

const resetModalStyle = {
  overlay: {
    backgroundColor: null
  },
  content: {
    top: null,
    left: null,
    right: null,
    bottom: null,
    border: null,
    background: null,
    borderRadius: null,
    padding: null,
    position: null
  }
};

export default class ProxyModal extends Component {

  static propTypes = {
    modalIsOpen: PropTypes.bool.isRequired,
    modalType: PropTypes.number.isRequired,
    closeModal: PropTypes.func.isRequired,
    createProxyRequest: PropTypes.func.isRequired,
    proxy: PropTypes.object,
    updateProxy: PropTypes.func.isRequired,
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const { proxy: { id }, modalType, createProxyRequest, updateProxy } = this.props;
    const proxy = {
      listen: {
        host: this.refs.listen_host.value,
      },
      target: {
        host: this.refs.target_host.value,
        port: this.refs.target_port.value,
      },
    };

    if (modalType === 0) {
      createProxyRequest(proxy);
    } else {
      updateProxy(id, proxy);
    }
  }

  render() {
    const {
      modalIsOpen,
      modalType,
      closeModal,
      proxy: {
        id,
        listen,
        target,
      }
    } = this.props;

    return (
      <Modal
        closeTimeoutMS={150}
        className="Modal__Bootstrap modal-dialog"
        style={resetModalStyle}
        isOpen={modalIsOpen}
        onRequestClose={() => closeModal()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close"
                    style={{color: '#555555'}} aria-label="Close"
                    onClick={() => closeModal()} >
              <span aria-hidden="true">&times;</span>
              <span className="sr-only">Close</span>
            </button>
            <h4 className="modal-title">{(modalType === 0) ? 'Add Proxy' : `Edit Proxy: ${id}`}</h4>
          </div>
          <div className="modal-body">
            <form className="form-horizontal">
              <div className="form-group">
                <label htmlFor="listen_host" className="col-sm-3 control-label">Listen Host:</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control"
                         id="listen_host" ref="listen_host"
                         defaultValue={listen.host}/>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="target_host" className="col-sm-3 control-label">Target Host:</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control"
                         id="target_host" ref="target_host"
                         defaultValue={target.host}/>
                </div>

                <label htmlFor="target_port" className="col-sm-1 control-label">Port:</label>
                <div className="col-sm-2">
                  <input type="text" className="form-control"
                         id="target_port" ref="target_port"
                         defaultValue={target.port}/>
                </div>
              </div>

            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={() => closeModal()}>Close</button>
            <button type="button" className="btn btn-primary" onClick={::this.handleFormSubmit}>
              {(modalType === 0) ? 'Create' : 'Save'}
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}
