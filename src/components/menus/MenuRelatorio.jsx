import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

class MenuRelatorio extends React.Component {

  render() {
    return (
      <MenuItem
        primaryText="Relatório"
        rightIcon={<ArrowDropRight />}
        leftIcon={<ActionAssignment />}
        menuItems={[
          <MenuItem primaryText="Teste"
            leftIcon={<ActionAssignment />}
            />,
        ]}
      />
    );
  }
}

export default MenuRelatorio
