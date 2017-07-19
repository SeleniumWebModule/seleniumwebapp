import React from 'react';
import {Panel} from 'react-bootstrap';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import '../../css/Tables.css'; 
 
export default class TableRule extends React.Component {
  constructor() {
    super();
    this.state = {
      headersColumn: ["Regra", "Gerar Mantis", "Categoria" ,"Gravidade", "Prioridade", "Print Screen","Vídeo"]
    };
  }

  render() {
    const table = (
      <div>
        <Panel header="Tabela de Regras" className='pnltbl'>
          <Table
          tableValues={this.props.tableValues}
          fixedHeader={true}
          stripedRows={true}
          showRowHover={true}
          selectable={true}
          deselectOnClickaway={false}
          showCheckboxes={false}

          >
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
              enableSelectAll={false}
            >
              <TableRow>
                {this.state.headersColumn.map((row) => (
                  <TableHeaderColumn key={row.toString()}>{row}</TableHeaderColumn>
                ))}
              </TableRow>

            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              showCheckbox={false}
              showRowHover={true}
              stripedRows={false}
              >
               {this.props.tableValues.map((row, index) => (
                  <TableRow key={index}>
                    <TableRowColumn>{row.name}</TableRowColumn>
                    <TableRowColumn>{row.generateMantis === false ? "Não" : "Sim"}</TableRowColumn>
                    <TableRowColumn>{row.category === "" ? "Não definida" : row.category}</TableRowColumn>
                    <TableRowColumn>{row.gravity === "" ? "Não definida" : row.gravity}</TableRowColumn>
                    <TableRowColumn>{row.priority === "" ? "Não definida" : row.priority}</TableRowColumn>
                    <TableRowColumn>{row.evidencePrintScreen === false ? "Não" : "Sim"}</TableRowColumn>
                    <TableRowColumn>{row.evidenceVideo === false ? "Não" : "Sim"}</TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
          </Table> 
        </Panel>
      </div>
    )

    return(
      table
    );
  }
}