import React from 'react';
import { findIndex } from 'lodash';
import TextEditor from 'js/components/TextEditor';
import { themes, fontSizes } from 'js/components/TextEditor/options';
import { Row, Col, Card } from 'antd';
import axios from 'axios';
import './styles.scss';
import Request from 'js/services/request';
import Translate from 'js/services/translate';

export default class Editor extends React.Component {

  constructor(props) {
    super(props);

    var text = 'Se sabe que la variable edad es 23.\n\nSi la edad es mayor a 18, la variable condición es "mayor de edad". Sino, la variable condición es "menor de edad".';
    this.state = {
      text: text,
      pseudocode: '',
      javascript: ''
    }
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
    this.handleChangeFontSize = this.handleChangeFontSize.bind(this);
  }

  componentDidMount() {
    const { fetchLessons, lessons } = this.props;
    !lessons.exercises ? fetchLessons(1) : null;
  }

  handleChangeTheme(theme) {
    this.props.changeTextEditorTheme(theme);
  }

  handleChangeFontSize(fontSize) {
    this.props.changeFontSize(fontSize);
  }

  handleChangeText = (text) => {
    Translate.translate(text).then( ({ data }) => {
      let { pseudocode, javascript } = data;
      console.log(data);
      this.setState({
        pseudocode,
        javascript
      });
    });
  }

  getNextExercise = () => {
    const { exercises } = this.props.lessons[0];
    const index = findIndex(exercises, (e) => e.done === false);
    return index > -1 ? exercises[index] : null;
  };

  render() {
    const exercise = this.props.lessons[0]
      ? this.getNextExercise()
      : null;
    return (
      <Row className="editorContainer">
        <Col span={6}>
          <Card className="card" title="Introduction" bordered={false}>
            {exercise ?
              <div>
                <h3>{exercise.title}</h3>
                <p>{exercise ? exercise.description : 'Possible exercise'}</p>
                <div className='instructions'>
                  <p>{exercise.instructions}</p>
                </div>
              </div>
              : <p>Possible exercise</p>
            }
          </Card>
        </Col>
        <Col span={9}>
          <TextEditor className="editor" theme="chrome" mode="text" height='80vh' showGutter={false} value={this.state.text} onChange={this.handleChangeText} />
        </Col>
        <Col span={9}>
          <TextEditor className="editor" readOnly={true} mode="text" height='39vh' value={this.state.pseudocode} />
          <TextEditor className="editor" readOnly={true} mode="javascript" height='39vh' value={this.state.javascript} />
        </Col>
      </Row>
    );
  }
}
