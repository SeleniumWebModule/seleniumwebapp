import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Divider from 'material-ui/Divider';
import CommunicationContactPhone from 'material-ui/svg-icons/communication/contact-phone';
import ActionGavel from 'material-ui/svg-icons/action/gavel';
import ActionTouchApp from 'material-ui/svg-icons/action/touch-app';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ActionBuild from 'material-ui/svg-icons/action/build';
import AvPlaylistAddCheck from 'material-ui/svg-icons/av/playlist-add-check';
import { connect } from 'react-redux';
import { selectedPath } from '../actions';

class MenuRequest extends React.Component {
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
          primaryText="Solicitação"
          rightIcon={<ArrowDropRight />}
          leftIcon={<CommunicationContactPhone />}
          menuItems={[
            <MenuItem primaryText="Teste"
              leftIcon={<AvPlaylistAddCheck />}
              onClick={() => {this.selectedPath('/request/test')}}
              />,
            <Divider />,
            <MenuItem primaryText="Regra"
                leftIcon={<ActionGavel />}
                onClick={() => {this.selectedPath('/request/rule')}}
              />,
            <MenuItem primaryText="Evento"
                leftIcon={<ActionTouchApp />}
                onClick={() => {this.selectedPath('/request/event')}}
              />,
            <MenuItem primaryText="Relatório"
              leftIcon={<ActionAssignment />}
              onClick={() => {this.selectedPath('/request/report')}}
            />,
            <Divider />,
            <MenuItem primaryText="InfraEstrutura - (Servidores, Bancos)"
              leftIcon={<ActionBuild />}
              onClick={() => {this.selectedPath('/request/infrastructure')}}
            />,
          ]}
        />
      );
    }
}

export default connect (null, {selectedPath}) (MenuRequest);
