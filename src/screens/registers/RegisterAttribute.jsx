import React  from 'react';
import Header from '../../components/Header';
import {Panel} from 'react-bootstrap';
import AvLibraryBooks from 'material-ui/svg-icons/av/library-books';
import TableWebApp from '../../components/tables/TableWebApp';
import TableAttribute from '../../components/tables/TableRule';
import TextFieldWebApp from '../../components/TextField'
import '../../css/Screens.css';
import { connect } from 'react-redux';
import { registerAttribute } from '../../actions';

class RegisterAttribute extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      value: '',
      description: '',
      headersColumn: ["Nome", "Valor"],
    };
  }

  save() {

    if (this.refs.nameref.state.value === '') {
        this.refs.nameref.showmsgerror("O nome do atributo é de preenchimento obrigatório.");
        return;
    }

    if (this.refs.valueref.state.value === '') {
        this.refs.valueref.showmsgerror("O valor para o atributo é de preenchimento obrigatório.");
        return;
    }

    if (this.refs.descref.state.value === '') {
        this.refs.descref.showmsgerror("Uma descrição para o atributo é de preenchimento obrigatório.");
        return;
    }    

    this.props.registerAttribute({
      name: this.refs.nameref.state.value,
      value: this.refs.valueref.state.value,
      description: this.refs.descref.state.value,
    });

    this.refs.nameref.clearText();
    this.refs.valueref.clearText();
    this.refs.descref.clearText();
  }

  render() {
    const { states } = this.props;

    console.log(states);

    const view = (
      <div className={'screen-style'}>
        <Panel className="pnl">
           <Header save={this.save.bind(this)} title="Cadastro de Atributo" icon={<AvLibraryBooks />}/>
           <TextFieldWebApp hintText="Defina um nome para o atributo" labelText="Nome" maxLength="80" 
                fullWidth={true} ref="nameref" />

            <TextFieldWebApp hintText="Defina um valor para o atributo" labelText="Valor" maxLength="80" 
                fullWidth={true} ref="valueref" />
           
           <TextFieldWebApp labelText="Entre com informações relevantes sobre o atributo"
                fullWidth={true} ref="descref" textArea={true} rows={5} />

           <div>
            <TableWebApp tableHeader="Atributos" table={<TableAttribute headersColumn={this.state.headersColumn} 
              fullWidth={true} tableValues={states.attributes} />}
            /> 

           </div>
        </Panel>
      </div>
    )

    return (
      states.currentPath === '/register/attribute' ? view : <div />
    );
  }
}

function currentPath(stateReducer) {
  return {
    states: stateReducer
  }
}

export default connect(currentPath, {registerAttribute}) (RegisterAttribute)
