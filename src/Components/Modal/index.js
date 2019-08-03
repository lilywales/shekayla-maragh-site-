import React, { Component} from 'react';
import ModalContent from "../../Components/ModalContent";
import ModalTrigger from "../../Components/ModalTrigger";


 class Modal extends Component {
   constructor() {
     super();
     this.state = {
       isShown: false
     };
   }

  render() {
    return (
         <React.Fragment>
           <ModalTrigger
           showModal={this.showModal}
           triggerText={this.props.modalProps.triggerText} />
           {this.state.isShown?<ModalContent/>:<React.Fragment/>}
         </React.Fragment>
       );

  }
}

export default Modal;
