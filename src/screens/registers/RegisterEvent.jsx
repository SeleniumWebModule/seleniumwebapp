import React  from 'react';
import Header from '../../components/Header';
import {Panel} from 'react-bootstrap';
import ActionTouchApp from 'material-ui/svg-icons/action/touch-app'
import TableWebApp from '../../components/tables/TableWebApp';
import TableEvent from '../../components/tables/TableEvent';
import TextFieldWebApp from '../../components/TextField'
import '../../css/Screens.css';
import { connect } from 'react-redux';
import { registerEvent } from '../../actions';

class RegisterEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      headersColumn: ["Nome", "Descrição"],
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

    let events = this.props.states.events;

    events.push({
      name: this.refs.nameref.state.value,
      description: this.refs.descref.state.value,
    });

    this.props.registerEvent({
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
          <div>
            <Header save={this.save.bind(this)} title="Cadastro de Evento" icon={<ActionTouchApp />}/>
          </div>
          <div className="frm">
            <TextFieldWebApp hintText="Defina o nome do evento" labelText="Nome" maxLength="80" 
              fullWidth={true} ref="nameref" />
           
            <TextFieldWebApp hintText="Entre com informações relevantes sobre o evento" labelText="Descrição" textArea={true}
              fullWidth={true} rows={5} maxRows={5} ref="descref"/>

            <div classname="table">
              <TableWebApp tableHeader="Eventos" table={<TableEvent headersColumn={this.state.headersColumn} fullWidth={true}
                tableValues={states.events}/>}
              /> 
            </div>
          </div>
        </Panel>
      </div>
    )

    return (
      states.currentPath === '/register/event' ? view : <div />
    );
  }
}

function currentPath(stateReducer) {
  return {
    states: stateReducer
  }
}

export default connect(currentPath, {registerEvent}) (RegisterEvent)
