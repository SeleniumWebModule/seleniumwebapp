import React  from 'react';
import Header from '../../components/Header';
import {Panel} from 'react-bootstrap';
import ActionGavel from 'material-ui/svg-icons/action/gavel';
import TableWebApp from '../../components/tables/TableWebApp';
import TableRule from '../../components/tables/TableRule';
import TextFieldWebApp from '../../components/TextField'
import '../../css/Screens.css';
import { connect } from 'react-redux';
import { registerRule } from '../../actions';

class RegisterRule extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      headersColumn: ["Nome", "Valor"],
    };
  }

  save() {

    if (this.refs.nameref.state.value === '') {
        this.refs.nameref.showmsgerror("O nome do evento é de preenchimento obrigatório.");
        return;
    }

    if (this.refs.descref.state.value === '') {
        this.refs.descref.showmsgerror("Uma descrição para o evento é de preenchimento obrigatório.");
        return;
    }    

    let rules = this.props.states.rules;

    rules.push({
      name: this.refs.nameref.state.value,
      description: this.refs.descref.state.value,
    });

    this.props.registerRule({
      name: this.refs.nameref.state.value,
      description: this.refs.descref.state.value,
    });

    this.refs.nameref.clearText();
    this.refs.descref.clearText();
  }

  render() {
    const { states } = this.props;

    const view = (
      <div className={'screen-style'}>
        <Panel className="pnl">
           <Header save={this.save.bind(this)} title="Cadastro de Regra" icon={<ActionGavel />}/>
           <TextFieldWebApp hintText="Defina um nome para a regra" labelText="Nome" maxLength="80" 
                fullWidth={true} ref="nameref" />
           
           <TextFieldWebApp hintText="Entre com informações relevantes sobre a regra"
                fullWidth={true} maxLength="80" ref="descref"/>

           <div>
            <TableWebApp tableHeader="Regras" table={<TableRule headersColumn={this.state.headersColumn} fullWidth={true}
              tableValues={states.rules}/>}
            /> 

           </div>

        </Panel>
      </div>
    )

    return (
      states.currentPath === '/register/rule' ? view : <div />
    );
  }
}

function currentPath(stateReducer) {
  return {
    states: stateReducer
  }
}

export default connect(currentPath, {registerRule}) (RegisterRule)
