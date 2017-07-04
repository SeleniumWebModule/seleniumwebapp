import React  from 'react';
import {PageHeader, Well} from 'react-bootstrap';
import {Panel} from 'react-bootstrap';
import IconButton from 'material-ui/IconButton';
import DeviceDvr from 'material-ui/svg-icons/device/dvr';
import ContentSave from 'material-ui/svg-icons/content/save';
import AutoCompleteWebApp from '../../components/AutoComplete';
import TableWebApp from '../../components/Table';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
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
import { selectedValue } from '../../actions';

class RegisterScreen extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      view: {},
      name: '',
      system: '',
      eventName: '',
      ruleName: '',
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
      tableHeader :['Evento', 'Regra'],
      tableValues :[{
          eventName: '',
          ruleName: ''
      }],
      tableHeaderAttrs :['Tipo do Atributo', 'Nome do Atributo'],
      tableValuesAttrs :[{
          attrType: '',
          attrValue: ''
      }],
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

  selectedValue(text) {
    this.props.selectedValue(text);
  }

  onSelectedAutoCompleteSystem(event) {
    this.setState({system: event.target.value});
  }

  onSelectedAutoCompleteEvent(event) {
    this.setState({eventName: event.target.value});
  }

  onSelectedAutoCompleteRule(event) {
    this.setState({ruleName: event.target.value});
  }

  onSelectedAutoCompleteAttrType(event) {
    this.setState({attrType: event.target.value});
  }

  onSelectedAutoCompleteAttrValue(event) {
    this.setState({attrValue: event.target.value});
  }

  onBlurNameSystem(event) {
    this.setState({name: event.target.value});
  }

  populateView() {
    this.setState({
      view: {
        name: this.state.name,
        system: this.state.system
      },
    });
  }

  associarEvento() {
    let events = this.state.tableValues;

    const eventValue = {
      eventName: this.state.eventName,
      ruleName: this.state.ruleName
    }

    events.push(eventValue);

    this.setState({
      tableValues: events
    });

    this.clearFields();
  }

  associarAtributo() {
    let attrs = this.state.tableValues;

    const attrsValue = {
      attrType: this.state.attrType,
      attrValue: this.state.attrValue
    }

    attrs.push(attrsValue);

    this.setState({
      tableValuesAttrs: attrs
    });

    this.clearFields();
  }

  clearFields() {
    this.refs.eventref.clearText();
    this.refs.ruleref.clearText();
  }

  render() {
    const {stateReducer} = this.props;

    return (
      <div className={stateReducer.currentPath !== "/register/screen" ? 'hidden' : 'screen-style'}>
        <Panel className="pnl">
           <PageHeader>
             <DeviceDvr />
             <label className="title-screen">Cadastro de Tela</label>
             <div className="iconbtn-pageheader">
               <IconButton
                 iconStyle={this.state.iconStyles.mediumIcon}
                 style={this.state.iconStyles.medium}
                 ><ContentSave /></IconButton>
             </div>
           </PageHeader>
           <div className="form-component" onBlur={this.onBlurNameSystem.bind(this)} ref="someName">
              <TextField hintText="Defina o nome da tela" floatingLabelText="Nome" floatingLabelFixed={true} fullWidth={true}/>
           </div>
           <div className='form-component' onBlur={this.onSelectedAutoCompleteSystem.bind(this)}>
             <AutoCompleteWebApp labelText='Sistema' hintText='Selecione o sistema (tela de cadastro de sistema)'
               dataSource={this.state.systemsDS} />
           </div>

           <div className='tab'>
              <Tabs>
                <Tab label='Eventos' >
                  <div>
                    <div className='form-component' onBlur={this.onSelectedAutoCompleteEvent.bind(this)}>
                      <AutoCompleteWebApp labelText='Evento' hintText='Defina o evento'
                        dataSource={this.state.eventsDS} ref="eventref"/>
                    </div>

                    <div className='form-component' onBlur={this.onSelectedAutoCompleteRule.bind(this)}>
                      <AutoCompleteWebApp labelText='Regra' hintText='Defina a regra para o evento'
                        dataSource={this.state.rulesDS} ref="ruleref"/>
                    </div>

                    <RaisedButton primary={true} fullWidth={true} onClick={() => {this.associarEvento()}} label="Associar" />
                    <div>
                      <Table
                        selectable={false}
                        fixedHeader={true}
                        >
                        <TableHeader>
                          <TableRow>
                            <TableHeaderColumn>Evento</TableHeaderColumn>
                            <TableHeaderColumn>Regra</TableHeaderColumn>
                          </TableRow>
                        </TableHeader>
                        <TableBody
                          displayRowCheckbox={false}
                          showRowHover={false}
                          stripedRows={false}
                        >
                          {this.state.tableValues.map( (row, index) => (
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
                    <div className='form-component' onBlur={this.onSelectedAutoCompleteAttrType.bind(this)}>
                      <AutoCompleteWebApp labelText='Tipo do Atributo' hintText='Entre com  o tipo do atributo'
                        dataSource={this.state.attrTypeDS} ref="attrtyperef"/>
                    </div>

                    <div className='form-component' onBlur={this.onSelectedAutoCompleteAttrValue.bind(this)}>
                      <AutoCompleteWebApp labelText='Valor do Atributo' hintText='Entre com o valor do atributo'
                        dataSource={this.state.attrValueDS} ref="attrvalueref"/>
                    </div>

                    <RaisedButton primary={true} fullWidth={true} onClick={() => {this.associarAtributo()}} label="Associar" />
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
                          stripedRows={true}
                        >
                          {this.state.tableValuesAttrs.map( (row, index) => (
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

export default connect(currentState, { selectedValue }) (RegisterScreen)
