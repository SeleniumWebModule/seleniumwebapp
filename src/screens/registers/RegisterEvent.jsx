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
      value: '',
      headersColumn: ["Nome", "Valor"],
    };
  }

  save() {

    if (this.refs.nameref.state.value === '') {
        this.refs.nameref.showmsgerror("O nome do evento é de preenchimento obrigatório.");
        return;
    }

    if (this.refs.valueref.state.value === '') {
        this.refs.valueref.showmsgerror("O valor para o evento é de preenchimento obrigatório.");
        return;
    }    

    let events = this.props.states.events;

    events.push({
      name: this.refs.nameref.state.value,
      value: this.refs.valueref.state.value,
    });

    this.props.registerEvent({
      name: this.refs.nameref.state.value,
      value: this.refs.valueref.state.value,
    });

    this.refs.nameref.clearText();
    this.refs.valueref.clearText();
  }

  render() {
    const { states } = this.props;

    const view = (
      <div className={'screen-style'}>
        <Panel className="pnl">
           <Header save={this.save.bind(this)} title="Cadastro de Evento" icon={<ActionTouchApp />}/>
           <TextFieldWebApp hintText="Defina o nome do evento" labelText="Nome" maxLength="80" 
                fullWidth={true} ref="nameref" />
           
           <TextFieldWebApp hintText="Defina um valor para o evento" labelText="Valor" style={{marginLeft:"2%"}} 
                fullWidth={true} maxLength="80" ref="valueref"/>

           <div>
            <TableWebApp tableHeader="Eventos" table={<TableEvent headersColumn={this.state.headersColumn} fullWidth={true}
              tableValues={states.events}/>}
            /> 

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
