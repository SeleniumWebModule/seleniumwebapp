import React from 'react';
import {Form, FormGroup, FormControl, Col, ControlLabel} from 'react-bootstrap';
import {Panel} from 'react-bootstrap';
import IconButton from 'material-ui/IconButton';
import ActionOpenInBrowser from 'material-ui/svg-icons/action/open-in-browser';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import '../../css/Screens.css';
import { connect } from 'react-redux';

class RegisterSystem extends React.Component {
  render() {
    const { paths } = this.props;

    return(
      <div className={paths.currentPath !== '/register/system' ? 'hidden' : 'screen-style'}>
        <AppBar
          className="back"
          title="Cadastro de Sistema"
          iconElementLeft={<IconButton><ActionOpenInBrowser /></IconButton>}
          iconElementRight={<FlatButton label="Salvar" />}
          />

        <Form horizontal>
          <Panel>
              <div className="pan">
                <FormGroup controlId="formHorizontalSistema">
                  <Col  componentClass={ControlLabel} sm={1}>
                    Nome
                  </Col>

                  <Col sm={10}>
                    <FormControl type="text"
                      placeholder="Entre com o nome do sistema a ser registrado" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalUrl">
                  <Col componentClass={ControlLabel} sm={1}>
                    URL
                  </Col>
                  <Col sm={10}>
                    <FormControl type="text"
                      placeholder="Entre com a URL de acesso do sistema" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalUser">
                  <Col  componentClass={ControlLabel} sm={1}>
                    Usuário
                  </Col>

                  <Col sm={10}>
                    <FormControl type="text"
                      placeholder="Entre com o usuário para o login" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalSenha">
                  <Col componentClass={ControlLabel} sm={1}>
                    Senha
                  </Col>
                  <Col sm={10}>
                    <FormControl type="password"
                      placeholder="Entre com a senha para o usuário informado" />
                  </Col>
                </FormGroup>
              </div>
            </Panel>
        </Form>
      </div>
    );
  }
}

function currentPath(stateReducer) {
  return {
    paths: stateReducer
  }
}

export default connect(currentPath, null) (RegisterSystem)
