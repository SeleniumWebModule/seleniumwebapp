import React  from 'react';
import Header from '../../components/Header';
import {Panel} from 'react-bootstrap';
import DeviceDvr from 'material-ui/svg-icons/device/dvr';
import AutoCompleteWebApp from '../../components/AutoComplete';
import TextFieldWebApp from '../../components/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import TableWebApp from '../../components/tables/TableWebApp';
import TableEventRule from '../../components/tables/TableEventRule';
import TableAttribute from '../../components/tables/TableAttribute';
import RaisedButton from 'material-ui/RaisedButton';
import AlertError from '../../components/AlertError'; 
import '../../css/Screens.css';
import { connect } from 'react-redux';
import { registerScreen } from '../../actions';

class RegisterScreen extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      view: {},
      name: '',
      system: '',
      eventName: '',
      ruleName: '',
      attrType: '',
      attrValue: '',
      msgerrorname: '',
      msgeventerrorref: '',
      headersColumnEvent : ['Evento', 'Regra'],
      headersColumnAttr : ['Tipo do Atributo', 'Nome do Atributo'],
      stylesTab : {
        headline: {
          fontSize: 24,
          paddingTop: 16,
          marginBottom: 12,
          fontWeight: 400,
        },
      },
      iconStyles : {
        mediumIcon: {
          width: 38,
          height: 48,
        },
        medium : {
          width: 86,
          height: 86,
          padding: 14,
        }
      }
    }
  }

  associateEvent() {
  /*  if (this.state.eventName === '') {
      this.showMessageError(this.refs.msgeventerrorref, "Evento Inválido!", "Os campos Evento e Regra devem ser preenchidos.");
      return;
    }

    let events = this.state.tableValueEvents;

    const eventValue = {
      eventName: this.state.eventName,
      ruleName: this.state.ruleName
    }

    events.push(eventValue);

    this.setState({
      tableValueEvents: events,
      eventName: '',
      ruleName: '',
    });

    this.clearEventsFields();*/
  }

  associateAttr() {
    /*if (this.state.attrType === '') {
      this.showMessageError(this.refs.msgattrerrorref, "Atributo Inválido!", "Os campos Tipo de Atributo e Valor de Atributo devem ser preenchidos.");
      return;
    }

    let attrs = this.state.tableValueAttrs;

    const attrsValue = {
      attrType: this.state.attrType,
      attrValue: this.state.attrValue
    }

    attrs.push(attrsValue);

    this.setState({
      tableValueAttrs : attrs,
      attrType: '',
      attrValue: ''
    });

    this.clearAttrsFields();*/
  }

  save() {
   /* if (this.state.name === '') {
      this.setState({msgerrorname:'O campo nome deve ser preenchido'});
      return;
    }

    const newScreen = {
      name: this.state.name,
      system: this.state.system,
      events: this.state.tableValueEvents,
      attributes: this.state.tableValueAttrs
    }

    //this.props.registerScreen(newScreen);*/
  }

  hideAlert() {
    this.props.hideAlert();
  }

  showMessageError(componentref, msghead, msgbody) {
    componentref.showAlert(msghead, msgbody);
  }

  render() {
    const { states } = this.props;

    const view = (
      <div className={'screen-style'}>
        <Panel className="pnl">
           <Header save={this.save.bind(this)} title="Cadastro de Tela" icon={<DeviceDvr />}/>

           <TextFieldWebApp hintText="Defina o nome do sistema" labelText="Nome" maxLength="50" 
              fullWidth={true} ref="nameref" />

            <AutoCompleteWebApp labelText='Sistema' hintText='Selecione o sistema (tela de cadastro de sistema)'
              dataSource={states.systems} msgerror={this.state.msgerror}/>

            <div className='tab'>
              <Tabs>
                <Tab label='Eventos' >
                  <div className='form-component'  onFocus={() => {this.refs.msgeventerrorref.hideAlert()}}>
                    <AutoCompleteWebApp labelText='Evento' hintText='Selecione um evento' dataSource={states.events} 
                      ref="eventref"/>                  
                    <AutoCompleteWebApp labelText='Regra' hintText='Selecione uma regra' dataSource={states.rules} 
                      ref="ruleref"/>                  
                  </div>

                  <RaisedButton primary={true} fullWidth={true} onClick={(event) => {this.associateEvent()}} label="Associar" />
                  <AlertError ref="msgeventerrorref"/>
                  <div className='form-component'>
                    <TableWebApp tableHeader="Eventos" 
                      table={<TableEventRule headersColumn={this.state.headersColumnEvent} tableValues={states.eventRules}/>}/> 
                  </div>
                </Tab>

                <Tab label='Atributos' >
                  <div className='form-component'  onFocus={() => {this.refs.msgattrerrorref.hideAlert()}}>
                    <AutoCompleteWebApp labelText='Nome do Atributo' hintText='Entre com  o nome do atributo' dataSource={[]} 
                      ref="eventref"/>                  
                    <AutoCompleteWebApp labelText='Valor do Atributo' hintText='Entre com o valor do atributo' dataSource={[]} 
                      ref="ruleref"/>                  
                  </div>

                  <RaisedButton primary={true} fullWidth={true} onClick={(event) => {this.associateEvent()}} label="Associar" />
                  <AlertError ref="msgattrerrorref"/>
                  <div className='form-component'>
                    <TableWebApp tableHeader="Eventos" 
                      table={<TableAttribute headersColumn={this.state.headersColumnAttr} tableValues={states.eventAttributes}/>}/> 
                  </div>
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
