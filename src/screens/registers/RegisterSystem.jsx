import React  from 'react';
import {PageHeader} from 'react-bootstrap';
import Header from '../../components/Header';
import {Panel} from 'react-bootstrap';
import IconButton from 'material-ui/IconButton';
import ActionOpenInBrowser from 'material-ui/svg-icons/action/open-in-browser';
import ContentSave from 'material-ui/svg-icons/content/save';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AlertError from '../../components/AlertError';
import TableWebApp from '../../components/tables/TableWebApp';
import '../../css/Screens.css';
import { connect } from 'react-redux';
import { registerSystem } from '../../actions';

class RegisterSystem extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '127.0.0.1 (localhost)',
      port: '',
      tableHeader: ["Nome", "Endereço (IP)", "Porta"],
      tableValues: [],
      clearTextField: false    
    };
  }

  handleInputChange(event) {
      this.setState({
          name: event.target.value
      })
  }

  save() {
    if (this.state.name === '') {
      //mensagem de erro
      return;
    }

    let system = this.state.tableValues;

    const newSystem = {
      name: this.state.name,
      address: this.state.address,
      port: this.state.port === '' ? '8080'  : this.state.port
    }

    system.push(newSystem);

    this.setState({
      tableValues: system,
      name: '',
      port: ''
    });

    this.props.registerSystem(newSystem);
  }

  render() {
    const { states } = this.props;

    const systemScreen = (
      <div className={states.currentPath !== '/register/system' ? 'hidden' : 'screen-style'}>
        <Panel className="pnl">
           <Header save={this.save.bind(this)} title="Cadastro de Sistema"/>
           <div className="form-component" ref="divreact" 
              onBlur={(event) => this.setState({name: event.target.value})}
              >
              <TextField hintText="Defina o nome do sistema" floatingLabelText="Nome"
                floatingLabelFixed={true} maxLength="50" fullWidth={true} 
                ref="nameref" value={this.state.name} onChange={this.handleInputChange.bind(this)}/>
           </div>
           <div className="form-component">
              <TextField floatingLabelText="Endereço (IP)" floatingLabelFixed={true} value={this.state.address} 
                disabled/>
              <div style={{float: "right"}} onBlur={(event) => this.setState({port: event.target.value})}>
                <TextField hintText="Default 8080" floatingLabelText="Porta" floatingLabelFixed={true}
                  style={{marginLeft:"2%"}} maxLength="5" ref="portref"/>
              </div>
           </div>
           <div>
            <TableWebApp tableHeader={this.state.tableHeader} tableValues={this.state.tableValues} 
              table={"system"}/> 
           </div>

        </Panel>
      </div>
    )

    return (
      systemScreen
    );
  }
}

function currentPath(stateReducer) {
  return {
    states: stateReducer
  }
}

export default connect(currentPath, {registerSystem}) (RegisterSystem)
