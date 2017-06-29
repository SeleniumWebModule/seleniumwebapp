import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add';
import ImagePhotoAlbum from 'material-ui/svg-icons/image/photo-album';
import ActionOpenInBrowser from 'material-ui/svg-icons/action/open-in-browser';
import DeviceDvr from 'material-ui/svg-icons/device/dvr';
import SocialPersonAdd from 'material-ui/svg-icons/social/person-add';
import { connect } from 'react-redux';
import { selectedPath } from '../../actions';

class MenuCadastro extends React.Component {
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
      <div>
      <MenuItem
        primaryText="Cadastro"
        rightIcon={<ArrowDropRight />}
        leftIcon={<ActionNoteAdd />}
        menuItems={[
          <MenuItem primaryText="System"
            onClick={() => {this.selectedPath("/system")}}
            leftIcon={<ActionOpenInBrowser />}
            />,
          <MenuItem primaryText="View"
            onClick={() => {this.selectedPath('/view')}}
            leftIcon={<DeviceDvr />}
            />,
          <MenuItem primaryText="Component"
            leftIcon={<ImagePhotoAlbum />}
            onClick ={() => {this.selectedPath('/component')}}
            />,
          <Divider />,
          <MenuItem primaryText="Usuário"
            leftIcon={<SocialPersonAdd />}
            onClick={() => {this.selectedPath('/user')}}
            />
        ]}
      />
    </div>
    );
  }
}

export default connect (null, {selectedPath}) (MenuCadastro);
