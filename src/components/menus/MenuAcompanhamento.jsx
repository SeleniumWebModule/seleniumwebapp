import React from 'react';
import {NavDropdown} from 'react-bootstrap';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

class MenuAcompanhamento extends React.Component {

  render() {
    return (
        <NavDropdown title="Acompanhamento">
          <MenuItem primaryText="Testes" />
          <MenuItem primaryText="Solicitação" />
        </NavDropdown>
    );
  }
}

export default MenuAcompanhamento
