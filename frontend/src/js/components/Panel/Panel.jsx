import React from 'react';

export default class Panel extends React.Component {

  static propTypes = {
    className: React.PropTypes.object,
  }

  render() {
    return (
      <div className={this.props.className}>
        { this.props.children }
      </div>  
    );
  }
}