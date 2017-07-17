import React  from 'react';
import Header from '../../components/Header';
import {Panel} from 'react-bootstrap';
import DeviceDvr from 'material-ui/svg-icons/device/dvr';
import AutoCompleteWebApp from '../../components/AutoComplete';
import TextFieldWebApp from '../../components/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import TableWebApp from '../../components/tables/TableWebApp';
import TableValuesAssociated from '../../components/tables/TableValuesAssociated';
import RaisedButton from 'material-ui/RaisedButton';
import AlertError from '../../components/AlertError'; 
import '../../css/Screens.css';
import { connect } from 'react-redux';
import { registerScreen } from '../../actions';

class RegisterScreen extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      name: '',
      system: '',
      currentComponent: '',
      currentEvent: '',
      currentAttribute: '',
      headersColumnScreenComponents: ['Nome'],
      headersColumnScreenEvents: ['Nome'],
      headersColumnScreenAttributes: ['Nome'],
      msgError: '',
      screenComponents: [],
      screenEvents: [],
      screenAttributes: []

    }
  }

  associateComponent() {
    if (this.state.currentComponent === '') {
      this.refs.componentref.showmsgerror('Um ou mais componentes devem estar associados à tela.');
      return;
    }

    const currentComponent = {
      name: this.state.currentComponent
    }

    this.state.screenComponents.push(currentComponent);
    this.refs.componentref.clearText();

    this.setState({
      currentComponent: ''
    })

  }

  associateEvent() {
    if (this.state.currentEvent === '') {
      this.refs.eventref.showmsgerror('Um ou mais eventos devem estar associados à tela.');
      return;
    }

    const currentEvent = {
      name: this.state.currentEvent
    }

    this.state.screenEvents.push(currentEvent);
    this.refs.eventref.clearText();

    this.setState({
      currentEvent: ''
    })
  }

  associateAttribute() {
    if (this.state.currentAttribute === '') {
      this.refs.attributeref.showmsgerror('Um ou mais atributos devem estar associados à tela.');
      return;
    }

    const currentAttribute = {
      name: this.state.currentAttribute
    }

    this.state.screenAttributes.push(currentAttribute);
    this.refs.attributeref.clearText();

    this.setState({
      currentAttribute: ''
    })
  }

  save() {
    if (this.refs.nameref.state.value === '') {
      this.refs.nameref.showmsgerror("O nome do atributo é de preenchimento obrigatório.");
      return;
    }

    if (this.state.system === '') {
        this.refs.systemref.showmsgerror("O sistema deve ser informado, por favor selecione um.");
        return;
    }

    if (this.state.screenEvents.length === 0) {
      this.refs.msgerrorref.showAlert('Associação Pendente', 'No mínimo um evento deve estar associado à tela.');
      return;
    }

    if (this.state.screenComponents.length === 0) {
      this.refs.msgerrorref.showAlert('Associação Pendente', 'No mínimo um componente deve estar associado à tela.');
      return;
    }

    if (this.state.screenAttributes.length === 0) {
      this.refs.msgerrorref.showAlert('Associação Pendente', 'No mínimo um atributo deve estar associado à tela.');
      return;
    }

    this.props.registerScreen({
      name: this.refs.nameref.state.value,
      system: this.state.system,
      events: this.state.screenEvents,
      components: this.state.screenComponents,
      attributes: this.state.screenAttributes
    });

    this.refs.nameref.clearText();
    this.refs.systemref.clearText();
    this.setState({
        screenEvents: [],
        screenComponents: [],
        screenAttributes:[]
    })
  }

  render() {
    const { states } = this.props;

    const view = (
      <div className={'screen-style'}>
        <Panel className="pnl">
           <Header save={this.save.bind(this)} title="Cadastro de Tela" icon={<DeviceDvr />}/>
           <AlertError ref="msgerrorref"/>

           <TextFieldWebApp hintText="Defina o nome da tela" labelText="Nome" maxLength="50" 
              fullWidth={true} ref="nameref" />
            <div onBlur={(event) => {this.setState({system: event.target.value})}}>
              <AutoCompleteWebApp labelText='Sistema' hintText='Selecione o sistema' dataSource={states.systems} 
               ref="systemref"/>
            </div>

            <div className='tab'>
              <Tabs>
                <Tab label='Componentes' >
                  <div onBlur={(event) => {this.setState({currentComponent: event.target.value})}}>
                    <AutoCompleteWebApp labelText='Componente' hintText='Selecione um Componente' dataSource={states.components} 
                      ref="componentref"/>                  
                  </div>

                   <RaisedButton primary={true} fullWidth={true} onClick={(event) => {this.associateComponent()}} label="Associar" />
                   <TableWebApp tableHeader="Componentes Associados" table={<TableValuesAssociated  fullWidth={true} 
                      tableValues={this.state.screenComponents} headersColumn={this.state.headersColumnScreenComponents} />}/>
                </Tab>
                <Tab label='Eventos' >
                  <div onBlur={(event) => {this.setState({currentEvent: event.target.value})}}>
                    <AutoCompleteWebApp labelText='Evento' hintText='Selecione um evento' dataSource={states.events} 
                      ref="eventref"/>                  
                  </div>

                   <RaisedButton primary={true} fullWidth={true} onClick={(event) => {this.associateEvent()}} label="Associar" />
                   <TableWebApp tableHeader="Eventos Associados" table={<TableValuesAssociated  fullWidth={true} 
                      tableValues={this.state.screenEvents} headersColumn={this.state.headersColumnScreenEvents} />}/>
               </Tab>
               <Tab label='Atributos'>
                  <div onBlur={(event) => {this.setState({currentAttribute: event.target.value})}}>
                    <AutoCompleteWebApp labelText='Atributo' hintText='Selecione um atributo' dataSource={states.attributes} 
                      ref="attributeref"/>                  
                  </div>

                   <RaisedButton primary={true} fullWidth={true} onClick={(event) => {this.associateAttribute()}} label="Associar" />
                   <TableWebApp tableHeader="Atributos Associados" table={<TableValuesAssociated  fullWidth={true} 
                      tableValues={this.state.screenAttributes} headersColumn={this.state.headersColumnScreenAttributes} />}/>
                </Tab>
              </Tabs>
            </div>
        </Panel>
      </div>
    )

    return (
        states.currentPath === '/register/screen' ? view : <div />
    );
  }
}

function currentPath(stateReducer) {
  return {
    states: stateReducer
  }
}

export default connect(currentPath, {registerScreen}) (RegisterScreen)
