import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import SocialPerson from 'material-ui/svg-icons/social/person';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Login from './views/Login'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import MenuCadastro from './menus/MenuCadastro';
import MenuSolicitacao from './menus/MenuSolicitacao';
import MenuRelatorio from './menus/MenuRelatorio';
import MenuAcompanhamento from './menus/MenuAcompanhamento';

class Menus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Menu" />
            <IconMenu
              iconButtonElement={<IconButton><NavigationMenu /></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              >
                <MenuCadastro />
                <MenuSolicitacao />
                <MenuAcompanhamento />
                <MenuRelatorio />
              </IconMenu>
        </ToolbarGroup>

        <ToolbarGroup >
          <ToolbarSeparator />
            <IconButton
                onTouchTap={this.handleOpen}
            ><SocialPerson /></IconButton>
              <Login
                setStateOpen={this.state.value}
              />
              <FontIcon className="muidocs-icon-custom-sort" />
        </ToolbarGroup>
      </Toolbar>
    )
    }
  }
export default Menus
