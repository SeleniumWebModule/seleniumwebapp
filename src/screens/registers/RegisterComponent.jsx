import React  from 'react';
import Header from '../../components/Header';
import {Panel} from 'react-bootstrap';
import ImagePhotoAlbum from 'material-ui/svg-icons/image/photo-album';
import TableWebApp from '../../components/tables/TableWebApp';
import TableComponent from '../../components/tables/TableComponent';
import TableValuesAssociated from '../../components/tables/TableValuesAssociated';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextFieldWebApp from '../../components/TextField';
import AutoCompleteWebApp from '../../components/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import AlertError from '../../components/AlertError'; 
import '../../css/Screens.css';
import { connect } from 'react-redux';
import { registerComponent } from '../../actions';

class RegisterComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      value: '',
      description: '',
      currentEvent: '',
      currentAttribute: '',
      headersColumn: ["Nome", "Descrição"],
      headersColumnComponentEvents: ["Nome"],
      headersColumnComponentAttributes: ["Nome"],
      componentEvents: [],
      componentAttributes: [],
      msgErrorComponent: ''
    };
  }

   associateEvent() {
    if (this.state.currentEvent === '') {
       this.refs.eventref.showmsgerror("O nome do evento é de preenchimento obrigatório.");
       return;
    }

    const currentEvent = {
      name: this.state.currentEvent
    }

    this.state.componentEvents.push(currentEvent);
    this.refs.eventref.clearText();

    this.setState({
      currentEvent: ''
    })
  }

  associateAttribute() {
    if (this.state.currentAttribute === '') {
       this.refs.attributeref.showmsgerror("O nome do atributo é de preenchimento obrigatório.");
       return;
    }

    const currentAttribute = {
      name: this.state.currentAttribute
    }

    this.state.componentAttributes.push(currentAttribute);
    this.refs.attributeref.clearText();

    this.setState({
      currentEvent: ''
    })
  }

  save() {

    if (this.refs.nameref.state.value === '') {
        this.refs.nameref.showmsgerror("O nome do atributo é de preenchimento obrigatório.");
        return;
    }

    if (this.refs.descref.state.value === '') {
        this.refs.descref.showmsgerror("Uma descrição para o atributo é de preenchimento obrigatório.");
        return;
    }

    if (this.state.componentEvents.length === 0) {
      this.refs.msgcomponenterrorref.showAlert('Associação Pendente', 'No mínimo um evento deve estar associado ao componente.');
      return;
    }

    if (this.state.componentAttributes.length === 0) {
      this.refs.msgcomponenterrorref.showAlert('Associação Pendente', 'No mínimo um atributo deve estar associado ao componente.');
      return;
    }

    this.props.registerComponent({
      name: this.refs.nameref.state.value,
      description: this.refs.descref.state.value,
      events: this.state.componentEvents,
      attributes: this.state.componentAttributes
    });

    this.refs.nameref.clearText();
    this.refs.descref.clearText();
  }

  render() {
    const { states } = this.props;

    console.log(states)

    const view = (
      <div className={'screen-style'}>
        <Panel className="pnl">
           <Header save={this.save.bind(this)} title="Cadastro de Componente" icon={<ImagePhotoAlbum />}/>
           <div onClick={() => {this.refs.msgcomponenterrorref.hideAlert()}}>
            <AlertError ref="msgcomponenterrorref" />
           </div>
           <TextFieldWebApp hintText="Defina um nome para o componente" labelText="Nome" maxLength="80" 
                fullWidth={true} ref="nameref" />
           
           <TextFieldWebApp labelText="Entre com informações relevantes sobre o componente"
                fullWidth={true} ref="descref" textArea={true} rows={5} />

           <div className='tab'>
              <Tabs>
                <Tab label='Associação de Eventos' >
                   <div onBlur={(event) => {this.setState({currentEvent: event.target.value})}}>
                    <AutoCompleteWebApp labelText='Nome do Evento' hintText='Selecione um atributo' dataSource={states.events} 
                      ref="eventref"/>       
                   </div>

                   <RaisedButton primary={true} fullWidth={true} onClick={(event) => {this.associateEvent()}} label="Associar" />

                   <TableWebApp tableHeader="Eventos Associados" table={<TableValuesAssociated headersColumn={this.state.headersColumnComponentEvents} 
                     fullWidth={true} tableValues={this.state.componentEvents}/>} />
                </Tab>
                <Tab label='Associação de Atributos'>
                    <div onBlur={(event) => {this.setState({currentAttribute: event.target.value})}}>
                      <AutoCompleteWebApp labelText='Nome do Atributo' hintText='Selecione um atributo' dataSource={states.attributes} 
                       ref="attributeref"/>   
                    </div>

                    <RaisedButton primary={true} fullWidth={true} onClick={(event) => {this.associateAttribute()}} label="Associar" />
                    <div>
                      <TableWebApp tableHeader="Atributos Associados" table={<TableValuesAssociated
                        headersColumn={this.state.headersColumnComponentAttributes} fullWidth={true} 
                        tableValues={this.state.componentAttributes}/>} />
                    </div>

                </Tab>
              </Tabs>
           </div>
           <div>
            <TableWebApp tableHeader="Componentes" table={<TableComponent headersColumn={this.state.headersColumn} 
              fullWidth={true} tableValues={states.components} />}
            /> 
           </div>
        </Panel>
      </div>
    )

    return (
      states.currentPath === '/register/component' ? view : <div />
    );
  }
}

function currentPath(stateReducer) {
  return {
    states: stateReducer
  }
}

export default connect(currentPath, {registerComponent}) (RegisterComponent)
