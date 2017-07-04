import React from 'react';
import '../../css/Screens.css';
import { connect } from 'react-redux';

class MonitoringInfrastructure extends React.Component {
  render() {
    const {paths} = this.props;

    return(
      <div className={paths.currentPath !== '/monitoring/infrastructure' ? 'hidden' : ''}>
        Acompanhamento da Execução na geração da Infraestrutura, tais como containers abertos,
        o que existe em cada container, entre outras informações.
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (MonitoringInfrastructure)
