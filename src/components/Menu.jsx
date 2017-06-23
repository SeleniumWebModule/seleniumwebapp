import React, {Component} from 'react';
import {MenuItem, Nav, Navbar, NavDropdown} from 'react-bootstrap';

class Menu extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Nav>
            <NavDropdown eventKey={1} title="Cadastro" id="basic-nav-dropdown">
              <MenuItem eventKey={1.1}>Sistema</MenuItem>
              <MenuItem eventKey={1.2}>Tela</MenuItem>
              <MenuItem eventKey={1.3}>Componente</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={1.4}>Usuário</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={2} title="Solicitação" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1}>Teste</MenuItem>
              <MenuItem divider />
              <NavDropdown eventKey={2.2} title="Evento">
                <MenuItem eventKey={1.1}>Novo</MenuItem>
                <MenuItem eventKey={1.2}>Alteração</MenuItem>
              </NavDropdown>

              <NavDropdown eventKey={2.3} title="Regra">
                <MenuItem eventKey={1.1}>Nova</MenuItem>
                <MenuItem eventKey={1.2}>Alteração</MenuItem>
              </NavDropdown>
            </NavDropdown>

            <NavDropdown eventKey={3} title="Acompanhamento" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Testes</MenuItem>
                <MenuItem eventKey={3.2}>Solicitação</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={4} title="Relatórios" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Testes</MenuItem>
                <MenuItem eventKey={3.2}>Solicitação</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Header>
      </Navbar>
    )
    }
  }
export default Menu
