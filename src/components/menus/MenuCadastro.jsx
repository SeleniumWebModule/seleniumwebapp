import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add';
import ImagePhotoAlbum from 'material-ui/svg-icons/image/photo-album';
import ActionOpenInBrowser from 'material-ui/svg-icons/action/open-in-browser';
import DeviceDvr from 'material-ui/svg-icons/device/dvr';
import SocialPersonAdd from 'material-ui/svg-icons/social/person-add';
import Menus from '../Menus'

class MenuCadastro extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        currentView: 'home'
      }
  }

  render() {
    return (
      <div>
      <MenuItem
        primaryText="Cadastro"
        rightIcon={<ArrowDropRight />}
        leftIcon={<ActionNoteAdd />}
        menuItems={[
          <MenuItem primaryText="System"
            onClick={() => {this.currentView='system-add'}}
            leftIcon={<ActionOpenInBrowser />}
            />,
          <MenuItem primaryText="View"
            onClick={() => {this.currentView='view-add'}}
            leftIcon={<DeviceDvr />}
            />,
          <MenuItem primaryText="Component"
            leftIcon={<ImagePhotoAlbum />}
            onClick ={() => {this.currentView='component-add'}}
            />,
          <Divider />,
          <MenuItem primaryText="Usuário"
            leftIcon={<SocialPersonAdd />}
            onClick={() => {this.currentView='user-add'}}
            />
        ]}
      />
    </div>
    );
  }
}

export default MenuCadastro
