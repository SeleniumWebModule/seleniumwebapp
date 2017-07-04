import React from 'react';
import '../../css/Screens.css';
import { connect } from 'react-redux';

class RegisterComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      componentType : [
        'Caixa de Texto - Input Text',
        'Rótulo - Label',
        'Botão - Button',
        'Tabela - Grid',
        'Coluna - Columm  (Tabela Requerida)',
        'Menu'
      ],
      events : [
        'Entrar com algum valor - Digitar um nome, número ou outro',
        'Clicar uma vez - Ação em algum componente',
        'Clicar duas vezes - Ação em algum componente',
        'Selecionar um valor - Caixa de Seleção, Tabela, Lista'
      ]
    }
  }

  render() {
    const {paths} = this.props;

    return(
      <div className={paths.currentPath !== '/register/component' ? 'hidden' : ''}>
        Cadastro de Componente
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (RegisterComponent)
