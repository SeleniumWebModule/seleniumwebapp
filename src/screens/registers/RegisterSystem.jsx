import React  from 'react';
import Header from '../../components/Header';
import {Panel} from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import ActionOpenInBrowser from 'material-ui/svg-icons/action/open-in-browser';
import TableWebApp from '../../components/tables/TableWebApp';
import TableSystem from '../../components/tables/TableSystem';
import TextFieldWebApp from '../../components/TextField'
import '../../css/Screens.css';
import { connect } from 'react-redux';
import { registerSystem } from '../../actions';

class RegisterSystem extends React.Component {
  constructor() {
    super();
    this.state = {
      address: '127.0.0.1 (localhost)',
      headersColumn: ["Nome", "Endereço (IP)", "Porta"],
    };
  }

  save() {

    if (this.refs.nameref.state.value === '') {
      this.refs.nameref.showmsgerror("O nome do sistema é de preenchimento obrigatório");
      return;
    }

    let system = this.props.states.systems;

    system.push({
      name: this.refs.nameref.state.value,
      address: this.state.address,
      port: this.refs.portref.state.value === '' ? '8080'  : this.refs.portref.state.value
    });

    this.props.registerSystem({
      name: this.refs.nameref.state.value,
      address: this.state.address,
      port: this.refs.portref.state.value === '' ? '8080'  : this.refs.portref.state.value
    });

    this.setState({
      tableValues: system,
      port: ''
    });

    this.refs.nameref.clearText();
  }

  render() {
    const { states } = this.props;

    const view = (
      <div className={'screen-style'}>
        <Panel className="pnl">
          <div>
            <Header save={this.save.bind(this)} title="Cadastro de Sistema" icon={<ActionOpenInBrowser />}/>
          </div>
          <div className='frm'>
              <TextFieldWebApp hintText="Defina o nome do sistema" labelText="Nome" maxLength="50" 
                fullWidth={true} ref="nameref" />
              
              <TextField style={{marginRight: '10%'}} floatingLabelText="Endereço (IP)" floatingLabelFixed={true} value={this.state.address} 
                disabled />
               
              <TextFieldWebApp hintText="Default 8080" labelText="Porta"  maxLength="5" ref="portref"/>

            <div className="table">
              <TableWebApp tableHeader="Sistemas" table={<TableSystem headersColumn={this.state.headersColumn} 
                tableValues={states.systems}/>}
              /> 
            </div>
          </div>
        </Panel>
      </div>
    )

    return (
      states.currentPath === '/register/system' ? view : <div />
    );
  }
}

function currentPath(stateReducer) {
  return {
    states: stateReducer
  }
}

export default connect(currentPath, {registerSystem}) (RegisterSystem)
