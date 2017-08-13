import React from 'react';
import styles from './styles.scss';

export default class Header extends React.Component {

  static propTypes = {
    className: React.PropTypes.object,
  }

  static defaultProps = {
    className: styles.header,
  }

  render() {
    return (
      <div className={this.props.className}>
        { this.props.children }
      </div>  
    );
  }
}

