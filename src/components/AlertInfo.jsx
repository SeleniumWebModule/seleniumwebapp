import React from 'react';
import { Alert } from 'react-bootstrap';

export default class AlertInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      style: {display: ''}
    }
  }

  hideMessage() {
    this.setState({
      style: {display: 'none'}
    });
  }

  render() {
    return(
      <div>
        <Alert bsStyle="info" style={this.state.style} bsSize="small"
          onClick={(event) => {this.hideMessage.bind(this)}}>
          <strong>Instruções</strong><br /> {this.props.messageBody}
        </Alert>
      </div>
    );
  }
}
