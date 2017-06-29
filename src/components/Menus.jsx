import React from 'react';
import {ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import MenuRegister from './menus/MenuRegister';
import MenuRequest from './menus/MenuRequest';
import MenuMonitoring from './menus/MenuMonitoring';
import MenuReport from './menus/MenuReport';

class Menus extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        menu : ''
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
              <MenuRegister />
              <MenuRequest />
              <MenuMonitoring />
              <MenuReport />
          </IconMenu>
        </ToolbarGroup>
      );
    }
  }

export default Menus
