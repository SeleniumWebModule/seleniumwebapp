import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Divider from 'material-ui/Divider';
import CommunicationContactPhone from 'material-ui/svg-icons/communication/contact-phone';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ActionGavel from 'material-ui/svg-icons/action/gavel';
import ActionEvent from 'material-ui/svg-icons/action/event';

class MenuSolicitacao extends React.Component {

  render() {
    return (
      <MenuItem
        primaryText="Solicitação"
        rightIcon={<ArrowDropRight />}
        leftIcon={<CommunicationContactPhone />}
        menuItems={[
          <MenuItem primaryText="Teste"
            leftIcon={<ActionAssignment />}
            />,
          <Divider />,
          <MenuItem primaryText="Regra"
              leftIcon={<ActionGavel />}
            />,
          <MenuItem primaryText="Evento"
              leftIcon={<ActionEvent />}
            />,
        ]}
      />
    );
  }
}

export default MenuSolicitacao
