import React from 'react';
import TextField from 'material-ui/TextField';

class TextFieldWebApp extends React.Component {
	constructor(){
		super();
		this.state = {
			value: '',
			msgerror: ''
		}
	}

	clearText() {
		this.setState({value: ''})
	}

	showmsgerror(msg) {
		this.setState({msgerror: msg})
	}

	render() {
		const text = (
			<TextField hintText={this.props.hintText} floatingLabelText={this.props.labelText} 
                maxLength={this.props.maxLength} fullWidth={this.props.fullWidth} multiLine={this.props.textArea}
                disabled={this.props.disabled} errorText={this.state.msgerror} value={this.state.value} 
                rows={this.props.rows} onChange={(event) => this.setState({value: event.target.value})}
                floatingLabelFixed={this.props.textArea} onFocus={() => this.setState({msgerror: ''})}/> 
		);
		return (
			text
		);
    }
}

export default TextFieldWebApp;