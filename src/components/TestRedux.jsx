import React from 'react';
import { selectedValue } from '../actions';
import { connect } from 'react-redux';

class TestRedux extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  onChangeEvent(event) {
    this.props.selectedValue(event.target.value);
  }

  render(){
    return(
      <div>
        <input type="text" onChange={this.onChangeEvent.bind(this)}/>
      </div>
    );
  }
}

export default connect (null, {selectedValue}) (TestRedux);
