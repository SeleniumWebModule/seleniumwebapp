import React  from 'react';
import {PageHeader} from 'react-bootstrap';
import {Panel} from 'react-bootstrap';
import IconButton from 'material-ui/IconButton';
import DeviceDvr from 'material-ui/svg-icons/device/dvr';
import ContentSave from 'material-ui/svg-icons/content/save';
import AutoCompleteWebApp from '../../components/AutoComplete';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AlertError from '../../components/AlertError';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {Tabs, Tab} from 'material-ui/Tabs';
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
      systemsDS : [
        'Administrativo - Sistema Web',
        'Venda - Sistema Desktop'
      ],
      eventsDS : [
        'Sem Evento',
        'Acionar ao abrir - O evento será disparado ao abrir a tela',
        'Acionar ao fechar - O evento será disparado ao fechar a tela'
      ],
      rulesDS : [
        'Sem Regra',
        'Validar Sessão',
        'Aguardar Tela'
      ],
      attrTypeDS : [
        'Encontrar por ... (Nome da Classe, Tag ...)',
        'Identificador (Attribute ID - Exemplo: O nome da classe em conjunto com o tipo/ valor - Encontrar Por = Nome da Classe)'
      ],
      attrValueDS: [
        'Nome da Classe - ClassName',
        'Nome da Tag - TAG name',
        'Nome da Tela (Associar com a regra Aguardar Tela - Se não for informado utilizará a própria tela)',
        'Valor (Attribute Value - Exemplo: Referente ao Identificador, seria o nome da classe, tag ...)'
      ],
      tableHeaderEvents : ['Evento', 'Regra'],
      tableValueEvents : [],
      tableHeaderAttrs : ['Tipo do Atributo', 'Nome do Atributo'],
      tableValueAttrs : [],
      msgErrorEvent: false,
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
    if (this.state.eventName === '') {
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

    this.clearEventsFields();
  }

  associateAttr() {
    if (this.state.attrType === '') {
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

    this.clearAttrsFields();
  }

  save() {
    if (this.state.name === '') {
      this.setState({msgerrorname:'O campo nome deve ser preenchido'});
      return;
    }

    const newScreen = {
      name: this.state.name,
      system: this.state.system,
      events: this.state.tableValueEvents,
      attributes: this.state.tableValueAttrs
    }

    this.props.registerScreen(newScreen);
  }

  clearEventsFields() {
    this.refs.eventref.clearText();
    this.refs.ruleref.clearText();
  }

  clearAttrsFields() {
    this.refs.attrtyperef.clearText();
    this.refs.attrvalueref.clearText();
  }

  hideAlert() {
    this.props.hideAlert();
  }

  showMessageError(componentref, msghead, msgbody) {
    componentref.showAlert(msghead, msgbody);
  }

  render() {
    const {stateReducer} = this.props;

    return (
      <div className={stateReducer.currentPath !== "/register/screen" ? 'hidden' : 'screen-style'}>
        <Panel className="pnl">
           <PageHeader>
             <DeviceDvr />
             <label className="title-screen">Cadastro de Tela</label>
             <div className="iconbtn-pageheader" onClick={() => {this.save()}}>
               <IconButton iconStyle={this.state.iconStyles.mediumIcon} style={this.state.iconStyles.medium}>
                 <ContentSave />
               </IconButton>
             </div>
           </PageHeader>
           <div className="form-component" onBlur={(event) => this.setState({name: event.target.value})} ref="nameref">
              <TextField hintText="Defina o nome da tela" floatingLabelText="Nome" floatingLabelFixed={true}
                fullWidth={true} errorText={this.state.msgerror}/>
           </div>
           <div className='form-component' onBlur={(event) => {this.setState({system: event.target.value})}}>
             <AutoCompleteWebApp labelText='Sistema' hintText='Selecione o sistema (tela de cadastro de sistema)'
               dataSource={this.state.systemsDS} />
           </div>

           <div className='tab'>
              <Tabs>
                <Tab label='Eventos' >
                  <div>
                    <div className='form-component' onBlur={(event) => {this.setState({eventName: event.target.value})}}
                      onFocus={() => {this.refs.msgeventerrorref.hideAlert()}}>
                      <AutoCompleteWebApp labelText='Evento' hintText='Defina o evento' dataSource={this.state.eventsDS}
                        ref="eventref"/>
                    </div>

                    <div className='form-component' onBlur={(event) => {this.setState({ruleName: event.target.value})}}
                      onFocus={() => {this.refs.msgeventerrorref.hideAlert()}}>
                      <AutoCompleteWebApp labelText='Regra' hintText='Defina a regra para o evento'
                        dataSource={this.state.rulesDS} ref="ruleref"/>
                    </div>


                        


                    <RaisedButton primary={true} fullWidth={true} onClick={(event) => {this.associateEvent()}} label="Associar" />
                    <AlertError ref="msgeventerrorref"/>

                    <div>
                      <Table
                        selectable={true}
                        fixedHeader={true}
                        >
                        <TableHeader>
                          <TableRow>
                            <TableHeaderColumn>Evento</TableHeaderColumn>
                            <TableHeaderColumn>Regra</TableHeaderColumn>
                          </TableRow>
                        </TableHeader>
                        <TableBody
                          displayRowCheckbox={true}
                          showRowHover={true}
                          stripedRows={false}
                        >

                          {this.state.tableValueEvents.map( (row, index) => (
                            <TableRow key={index}>
                              <TableRowColumn>{row.eventName}</TableRowColumn>
                              <TableRowColumn>{row.ruleName}</TableRowColumn>
                            </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </Tab>
                <Tab label="Atributos" >
                  <div>
                    <div className='form-component' onBlur={(event) => {this.setState({attrType: event.target.value})}}
                      onFocus={() => {this.refs.msgattrerrorref.hideAlert()}}>
                      <AutoCompleteWebApp labelText='Tipo do Atributo' hintText='Entre com  o tipo do atributo'
                        dataSource={this.state.attrTypeDS} ref="attrtyperef"/>
                    </div>

                    <div className='form-component' onBlur={(event) => {this.setState({attrValue: event.target.value})}}>
                      <AutoCompleteWebApp labelText='Valor do Atributo' hintText='Entre com o valor do atributo'
                        dataSource={this.state.attrValueDS} ref="attrvalueref"/>
                    </div>

                    <RaisedButton primary={true} fullWidth={true} onClick={(event) => {this.associateAttr()}} label="Associar" />
                    <AlertError ref="msgattrerrorref"/>

                    <div>
                      <Table
                        selectable={true}
                        fixedHeader={true}
                        >
                        <TableHeader>
                          <TableRow>
                            <TableHeaderColumn>Tipo do Atributo</TableHeaderColumn>
                            <TableHeaderColumn>Valor do Atributo</TableHeaderColumn>
                          </TableRow>
                        </TableHeader>
                        <TableBody
                          displayRowCheckbox={true}
                          showRowHover={true}
                          stripedRows={false}
                        >
                          {this.state.tableValueAttrs.map( (row, index) => (
                            <TableRow key={index}>
                              <TableRowColumn>{row.attrType}</TableRowColumn>
                              <TableRowColumn>{row.attrValue}</TableRowColumn>
                            </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </Tab>
            </Tabs>
          </div>
        </Panel>
      </div>
    );
  }
}

function currentState(state) {
  return {
    stateReducer: state
  }
}

export default connect(currentState, {registerScreen}) (RegisterScreen)
