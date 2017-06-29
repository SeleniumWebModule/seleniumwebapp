import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar as ToolbarReact, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import Login from './views/Login'
import Menus from './Menus';

class Toolbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu: ''
    }
  }

  render() {
    return (
      <ToolbarReact>
        <Menus />
        <ToolbarGroup >
          <ToolbarSeparator />
            <IconButton onTouchTap={this.handleOpen} >
              <Login />
            </IconButton>
            <FontIcon className="muidocs-icon-custom-sort" />
        </ToolbarGroup>
      </ToolbarReact>
    )
    }
  }
export default Toolbar
