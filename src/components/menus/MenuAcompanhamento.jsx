import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import AvPlaylistAddCheck from 'material-ui/svg-icons/av/playlist-add-check';
import CommunicationContactPhone from 'material-ui/svg-icons/communication/contact-phone';
import DeviceAccessTime from 'material-ui/svg-icons/device/access-time';
import { connect } from 'react-redux';
import { selectedPath } from '../../actions';

class MenuAcompanhamento extends React.Component {
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
        primaryText="Acompanhamento"
        rightIcon={<ArrowDropRight />}
        leftIcon={<DeviceAccessTime />}
        menuItems={[
          <MenuItem primaryText="Testes"
            onClick={() => {this.selectedPath("/test")}}
            leftIcon={<AvPlaylistAddCheck />}
            />,
          <MenuItem primaryText="Solicitação"
            onClick={() => {this.selectedPath("/solicitacao")}}
            leftIcon={<CommunicationContactPhone />}
            />,
        ]}
      />
    );
  }
}

export default connect(null, {selectedPath}) (MenuAcompanhamento)
