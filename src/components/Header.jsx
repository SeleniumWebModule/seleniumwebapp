import React from 'react';
import {PageHeader} from 'react-bootstrap';
import ActionOpenInBrowser from 'material-ui/svg-icons/action/open-in-browser';
import IconButton from 'material-ui/IconButton';
import ContentSave from 'material-ui/svg-icons/content/save';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Título',
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
      },
    };
  }

  handleClick(event) {
    this.props.save();
  }

  render() {
    const Header = (
      <PageHeader>
        <ActionOpenInBrowser />
        <label className="title-screen">{this.props.title}</label>
        <div className="iconbtn-pageheader" onClick={this.handleClick.bind(this)}>
          <IconButton iconStyle={this.state.iconStyles.mediumIcon} style={this.state.iconStyles.medium}>
            <ContentSave />
          </IconButton>
        </div>
      </PageHeader>
    );

    return (
      Header
    );
  }
}

export default Header;
