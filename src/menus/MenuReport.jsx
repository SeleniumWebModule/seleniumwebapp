import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import AvPlaylistAddCheck from 'material-ui/svg-icons/av/playlist-add-check';
import ActionGavel from 'material-ui/svg-icons/action/gavel';
import ActionTouchApp from 'material-ui/svg-icons/action/touch-app';
import CommunicationContactPhone from 'material-ui/svg-icons/communication/contact-phone';
import Divider from 'material-ui/Divider';
import { connect } from 'react-redux';
import { selectedPath } from '../actions';

class MenuReport extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          currentPath: ''
        }
    }

    selectedPath(path) {
      this.props.selectedPath(path);
    }

  render() {
    return (
      <MenuItem
        primaryText="Relatório"
        rightIcon={<ArrowDropRight />}
        leftIcon={<ActionAssignment />}
        menuItems={[
          <MenuItem primaryText="Testes"
            leftIcon={<AvPlaylistAddCheck />}
              onClick={() => {this.selectedPath('/report/tests')}}
            />,
          <Divider />,
          <MenuItem primaryText="Regras"
            leftIcon={<ActionGavel />}
            onClick={() => {this.selectedPath('/report/rules')}}
            />,
          <MenuItem primaryText="Eventos"
            leftIcon={<ActionTouchApp />}
            onClick={() => {this.selectedPath('/report/events')}}
            />,
          <Divider />,
          <MenuItem primaryText="Solicitações"
            leftIcon={<CommunicationContactPhone />}
            onClick={() => {this.selectedPath('/report/requests')}}
            />,
        ]}
      />
    );
  }
}

export default connect (null, {selectedPath}) (MenuReport);
