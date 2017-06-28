import React from 'react';
import {ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import MenuCadastro from './menus/MenuCadastro';
import MenuAcompanhamento from './menus/MenuAcompanhamento';
import MenuSolicitacao from './menus/MenuSolicitacao';
import MenuRelatorio from './menus/MenuRelatorio';

class Menus extends React.Component {
  constructor(props) {
      super(props);
      console.log(props)
      this.state = {
        info : ''
      }
  }

  render() {
    return (
      <ToolbarGroup>
        <ToolbarTitle text="Menu" />
          <IconMenu
            iconButtonElement={<IconButton><NavigationMenu /></IconButton>}
            anchorOrigin={{ horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
          >
              <MenuCadastro />
              <MenuSolicitacao />
              <MenuAcompanhamento />
              <MenuRelatorio />
          </IconMenu>
        </ToolbarGroup>
      );
    }
  }

export default Menus
