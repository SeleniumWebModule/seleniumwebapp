import React from 'react';
import { Alert } from 'react-bootstrap';

export default class AlertError extends React.Component {
  constructor() {
    super();
    this.state = {
      messageHead: '',
      messageBody: '',
      style: {display: 'none'}
    }
  }

  showAlert(messageHead, messageBody) {
    this.setState({
      messageHead,
      messageBody,
      style: {display: ''}
    });
  }

  hideAlert() {
    console.log('call ....');
    this.setState({
      style: {display: 'none'}
    });
  }

  render() {
    return(
      <div>
        <Alert bsStyle="danger" style={this.state.style}
          onClick={(event) => {this.hideAlert.bind(this)}}>
          <strong>{this.state.messageHead}</strong><br /> {this.state.messageBody}
        </Alert>
      </div>
    );
  }
}
