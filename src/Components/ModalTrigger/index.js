import React, { Component} from 'react';

export class ModalTrigger extends Component {
  render() {
  return (
    <button onClick={this.props.showModal} className="modal-button">
            {this.props.triggerText}
          </button>
    );
    }
}

export default ModalTrigger;
