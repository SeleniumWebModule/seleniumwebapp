import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SocialPerson from 'material-ui/svg-icons/social/person';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false
      }
    }

    handleOpen = () => {
      this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };
  render() {
      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleClose}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          disabled={true}
          onTouchTap={this.handleClose}
        />,
      ];

      return (
        <div>
          <SocialPerson onClick={this.handleOpen} />
          <Dialog
            title="Dialog With Actions"
            actions={actions}
            modal={true}
            open={this.state.open}
          >
            Only actions can close this dialog.
          </Dialog>
        </div>
      );
    }
  }

export default Login
