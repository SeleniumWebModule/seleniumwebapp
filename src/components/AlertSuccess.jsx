import React from 'react';
import { Alert } from 'react-bootstrap';

export default class AlertSuccess extends React.Component {
  render() {
    return(
      <div>
        <Alert bsStyle="primary" style={this.state.style}>
          <strong><small>{this.props.messageBody}</small></strong>
        </Alert>
      </div>
    );
  }
}
