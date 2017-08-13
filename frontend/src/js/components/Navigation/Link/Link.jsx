import React from 'react';
import { Icon } from 'react-materialize';
import styles from './styles.scss';

export default class Link extends React.Component {

  static propTypes = {
    icon: React.PropTypes.string,
    className: React.PropTypes.object,
    name: React.PropTypes.string,
  };

  static defaultProps = {
    className: React.PropTypes.object,
  };

  render() {
    return (
      <span className={styles.link} onClick={this.props.onClick}>
        {this.props.icon && <Icon>{this.props.icon}</Icon>}
        <span>{this.props.name}</span>
      </span>  
    );
  }
}

