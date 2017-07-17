import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class AutoCompleteWebApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      labelText: '',
      hintText: '',
      dataSource: [],
      msgerror: ''
    }
  }

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  };

  buildDataSource() {
    let objects = [];

    this.props.dataSource.map(value => (
      objects.push(value.name)  
    ));

    return objects;
  }

  componentWillMount() {
    this.setState({
      labelText: this.props.labelText,
      hintText: this.props.hintText,
      dataSource: this.buildDataSource()
    });
  }

  clearText() {
    this.setState({
      searchText: ''
    });
  }

  showmsgerror(msg) {
    this.setState({msgerror: msg})
  }

  render() {

    this.buildDataSource();

    return(
      <AutoComplete
        hintText={this.state.hintText}
        searchText={this.state.searchText}
        onUpdateInput={this.handleUpdateInput}
        onNewRequest={this.handleNewRequest}
        dataSource={this.state.dataSource}
        floatingLabelText={this.state.labelText}
        fullWidth={true} errorText={this.state.msgerror} onFocus={() => this.setState({msgerror: ''})}
        filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
        openOnFocus={true} />
    );
  }
}

export default AutoCompleteWebApp;
