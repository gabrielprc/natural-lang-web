import React from 'react';

export default class Panel extends React.Component {

  static propTypes = {
    className: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className}>
        { this.props.children }
      </div>  
    );
  }
}