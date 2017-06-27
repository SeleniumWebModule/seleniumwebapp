import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import AvPlaylistAddCheck from 'material-ui/svg-icons/av/playlist-add-check';
import CommunicationContactPhone from 'material-ui/svg-icons/communication/contact-phone';
import DeviceAccessTime from 'material-ui/svg-icons/device/access-time';

class MenuAcompanhamento extends React.Component {

  render() {
    return (
      <MenuItem
        primaryText="Acompanhamento"
        rightIcon={<ArrowDropRight />}
        leftIcon={<DeviceAccessTime />}
        menuItems={[
          <MenuItem primaryText="Testes"
            leftIcon={<AvPlaylistAddCheck />}
            />,
          <MenuItem primaryText="Solicitação"
            leftIcon={<CommunicationContactPhone />}
            />,
        ]}
      />
    );
  }
}

export default MenuAcompanhamento
