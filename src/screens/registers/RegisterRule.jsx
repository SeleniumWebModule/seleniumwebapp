import React  from 'react';
import Header from '../../components/Header';
import {Panel} from 'react-bootstrap';
import ActionGavel from 'material-ui/svg-icons/action/gavel';
import TableWebApp from '../../components/tables/TableWebApp';
import AutoCompleteWebApp from '../../components/AutoComplete';
import TableRule from '../../components/tables/TableRule';
import TextFieldWebApp from '../../components/TextField';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import '../../css/Screens.css';
import { connect } from 'react-redux';
import { registerRule } from '../../actions';

class RegisterRule extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      generateMantis: false,
      evidencePrintScreen: false,
      evidenceVideo: false,
      currentMantisGravity: '',
      currentMantisCategory: '',
      currentMantisPriority: '',
      mantisGravities: [{name: "Pequeno"}, {name: "Médio"}, {name: "Grande"}],
      mantisCategories: [{name: "Erro"}, {name: "Melhoria"}],
      mantisPriorities: [{name: "Baixo"}, {name: "Médio"}, {name: "Alto"}]
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

    this.props.registerRule({
      name: this.refs.nameref.state.value,
      description: this.refs.descref.state.value,
      generateMantis: this.state.generateMantis,
      gravity: this.state.currentMantisGravity,
      category: this.state.currentMantisCategory,
      priority: this.state.currentMantisPriority,
      evidencePrintScreen: this.state.evidencePrintScreen,
      evidenceVideo: this.state.evidenceVideo
    });

    this.refs.nameref.clearText();
    this.refs.descref.clearText();

    this.setState({
      currentMantisGravity: '',
      currentMantisPriority: '',
      currentMantisCategory: '',
      generateMantis: false,
      descriptionMantis: '',
      evidenceVideo: false,
      evidencePrintScreen: false,
    });
  }

  render() {
    const { states } = this.props;

    const mantis = (
        <div>
            <div style={{float: 'right', width: '70%'}}>
               <div>
                <TextFieldWebApp labelText="Descrição do Mantis" textArea={true} rows={5} maxRows={5}
                  fullWidth={true} ref="msgerrormantisef" 
                  hintText="Entre com a mensagem de erro que deve ser exibida caso o mantis seja gerado."
                  />
               </div>
               <div style={{marginTop: '2%'}}>
                  <div style={{float: 'left', marginRight: "2%"}}>
                     <Toggle label="Evidência em Print Screen" style={{maxWidth: 350}} ref="evidenciamantispsref"
                        labelStyle={{fontSize: 15, fontWeight: 'normal', color: 'navy', width:'100%'}} 
                        onToggle={(event, isInputChecked) => {this.setState({evidencePrintScreen: isInputChecked})}}/>
                  </div>
                  <div>
                      <Toggle label="Evidência em Video" labelStyle={{fontSize: 15,fontWeight: 'normal', color: 'navy'}} 
                      style={{maxWidth: 200}} ref="evidenciamantisvideoref"
                      onToggle={(event, isInputChecked) => {this.setState({evidenceVideo: isInputChecked})}} />
                  </div> 
               </div>
            </div>
            <div >
              <div onBlur={(event) => {this.setState({currentMantisGravity: event.target.value})}}>
                <AutoCompleteWebApp labelText='Gravidade' dataSource={this.state.mantisGravities}  ref="mantisgrativitiesref"/>                  
              </div>

              <div onBlur={(event) => {this.setState({currentMantisCategory: event.target.value})}}>
                <AutoCompleteWebApp labelText='Categoria' dataSource={this.state.mantisCategories}  ref="mantiscategoriesref"/>                  
              </div>            

              <div onBlur={(event) => {this.setState({currentMantisPriority: event.target.value})}}>
                <AutoCompleteWebApp labelText='Prioridade' dataSource={this.state.mantisPriorities}  ref="mantisprioritiesref"/>                  
              </div>
          </div>
        </div>
      )

    const view = (
      <div className={'screen-style'}>
        <Panel className="pnl">
          <div>
            <Header save={this.save.bind(this)} title="Cadastro de Regra" icon={<ActionGavel />}/>
          </div>
          
          <div className="frm">
            <TextFieldWebApp hintText="Defina um nome para a regra" labelText="Nome" maxLength="80" 
                  fullWidth={true} ref="nameref" />
             
            <TextFieldWebApp labelText="Descrição" hintText="Entre com informações relevantes sobre a regra" 
                  fullWidth={true} textArea={true} rows={5}ref="descref" />

            <div>
              <Toggle label="Gerar Mantis" labelStyle={{fontSize: 15,fontWeight: 'normal', color: 'navy'}} 
                 style={{maxWidth: 150}} ref="gerarmantisref"
                 onToggle={(event, isInputChecked) => {this.setState({generateMantis: isInputChecked})}}
                 />
             </div>

              {this.state.generateMantis ? mantis : <div />}

             <Divider />

             <div className="table">
                <TableWebApp tableHeader="Regras" table={<TableRule fullWidth={true} tableValues={states.rules}/>}/> 
              </div>
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
