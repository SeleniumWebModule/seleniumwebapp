import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Divider from 'material-ui/Divider';
import CommunicationContactPhone from 'material-ui/svg-icons/communication/contact-phone';
import ActionGavel from 'material-ui/svg-icons/action/gavel';
import ActionEvent from 'material-ui/svg-icons/action/event';
import AvPlaylistAddCheck from 'material-ui/svg-icons/av/playlist-add-check';
import { connect } from 'react-redux';
import { selectedPath } from '../../actions';

class MenuSolicitacao extends React.Component {
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
              />,
            <Divider />,
            <MenuItem primaryText="Regra"
                leftIcon={<ActionGavel />}
              />,
            <MenuItem primaryText="Evento"
                leftIcon={<ActionEvent />}
              />,
          ]}
        />
      );
    }
}

export default connect (null, {selectedPath}) (MenuSolicitacao);
