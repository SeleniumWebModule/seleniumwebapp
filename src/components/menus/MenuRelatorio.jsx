import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import AvPlaylistAddCheck from 'material-ui/svg-icons/av/playlist-add-check';
import ActionGavel from 'material-ui/svg-icons/action/gavel';
import ActionEvent from 'material-ui/svg-icons/action/event';

class MenuRelatorio extends React.Component {
  render() {
    return (
      <MenuItem
        primaryText="Relatório"
        rightIcon={<ArrowDropRight />}
        leftIcon={<ActionAssignment />}
        menuItems={[
          <MenuItem primaryText="Teste"
            leftIcon={<AvPlaylistAddCheck />}
            />,
          <MenuItem primaryText="Regras"
            leftIcon={<ActionGavel />}
            />,
          <MenuItem primaryText="Eventos"
            leftIcon={<ActionEvent />}
            />
        ]}
      />
    );
  }
}

export default MenuRelatorio
