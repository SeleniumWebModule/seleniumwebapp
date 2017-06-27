import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add';
import ImagePhotoAlbum from 'material-ui/svg-icons/image/photo-album';
import ActionOpenInBrowser from 'material-ui/svg-icons/action/open-in-browser';
import DeviceDvr from 'material-ui/svg-icons/device/dvr';
import SocialPersonAdd from 'material-ui/svg-icons/social/person-add';

class MenuCadastro extends React.Component {

  render() {
    return (
      <MenuItem
        primaryText="Cadastro"
        rightIcon={<ArrowDropRight />}
        leftIcon={<ActionNoteAdd />}
        menuItems={[
          <MenuItem primaryText="System"
            leftIcon={<ActionOpenInBrowser />}
            />,
          <MenuItem primaryText="View"
            leftIcon={<DeviceDvr />}
            />,
          <MenuItem primaryText="Component"
            leftIcon={<ImagePhotoAlbum />}
            />,
          <Divider />,
          <MenuItem primaryText="Usuário"
            leftIcon={<SocialPersonAdd />}
            />,
        ]}
      />
    );
  }
}

export default MenuCadastro
