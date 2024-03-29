import React, { Component } from 'react';
import { Modal } from '../NewUserModal/index';
export class Container extends Component {
  state = { isShown: false };
  showModal = () => {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus();
    });
    this.toggleScrollLock();
  };
  closeModal = () => {
    this.setState({ isShown: false });
    this.toggleScrollLock();
  };
  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };
  onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };

  toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };
  render() {
    return (
      <React.Fragment>
        {
          this.props.defaultValues ?
            <button className="edit-button" onClick={this.showModal}>Edit</button>
            :
            <button className="add-employee-button" onClick={this.showModal}>+</button>
        }
        {this.state.isShown ? (
          <Modal
            onSubmit={(event) => { this.props.onSubmit(event, this.closeModal) }}
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
            defaultValues={this.props.defaultValues}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Container;
