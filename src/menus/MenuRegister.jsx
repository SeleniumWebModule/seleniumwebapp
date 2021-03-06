import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add';
import ImagePhotoAlbum from 'material-ui/svg-icons/image/photo-album';
import ActionOpenInBrowser from 'material-ui/svg-icons/action/open-in-browser';
import ActionTouchApp from 'material-ui/svg-icons/action/touch-app';
import ActionGavel from 'material-ui/svg-icons/action/gavel';
import AvLibraryBooks from 'material-ui/svg-icons/av/library-books';
import DeviceDvr from 'material-ui/svg-icons/device/dvr';
import SocialPersonAdd from 'material-ui/svg-icons/social/person-add';
import { connect } from 'react-redux';
import { selectedPath } from '../actions';

class MenuRegister extends React.Component {
  render() {
    return (
      <div>
      <MenuItem
        primaryText="Cadastro"
        rightIcon={<ArrowDropRight />}
        leftIcon={<ActionNoteAdd />}
        menuItems={[
          <MenuItem primaryText="Sistema"
            onClick={() => {this.props.selectedPath("/register/system")}}
            leftIcon={<ActionOpenInBrowser />}
            />,
          <Divider />,
          <MenuItem primaryText="Tela"
            onClick={() => {this.props.selectedPath('/register/screen')}}
            leftIcon={<DeviceDvr />}
            />,
          <MenuItem primaryText="Componente"
            leftIcon={<ImagePhotoAlbum />}
            onClick ={() => {this.props.selectedPath('/register/component')}}
            />,
          <Divider />,
          <MenuItem primaryText="Evento"
            leftIcon={<ActionTouchApp />}
            onClick ={() => {this.props.selectedPath('/register/event')}}
          />,
          <MenuItem primaryText="Regra"
            leftIcon={<ActionGavel />}
            onClick ={() => {this.props.selectedPath('/register/rule')}}
          />,
          <MenuItem primaryText="Atributo"
            leftIcon={<AvLibraryBooks />}
            onClick ={() => {this.props.selectedPath('/register/attribute')}}
          />,
          <Divider />,
          <MenuItem primaryText="Usuário"
            leftIcon={<SocialPersonAdd />}
            onClick={() => {this.props.selectedPath('/register/user')}}
            />
        ]}
      />
    </div>
    );
  }
}

export default connect (null, {selectedPath}) (MenuRegister);
