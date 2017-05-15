import React from 'react';
import TextEditor from 'js/components/TextEditor';
import LessonGuide from 'js/views/LessonGuide';
import { themes, fontSizes } from 'js/components/TextEditor/options';
import { Row, Col, Modal } from 'antd';
import { debounce, findIndex } from 'lodash';
import axios from 'axios';
import './styles.scss';
import Translate from 'js/services/translate';

export default class Editor extends React.Component {

  constructor(props) {
    super(props);

    // var text = 'Se sabe que la variable edad es 23.\n\nSi la edad es mayor a 18, la variable condición es "mayor de edad". Sino, la variable condición es "menor de edad".';
    this.state = {
      text: '',
      pseudocode: '',
      javascript: '',
      lessons: [{
        id: 1,
        level: "Inicial",
        done: false,
        exercises: [
          { id: 1,
            title: '¡Hola!',
            description: '¡Bienvenido a Nat!\nDime tu nombre para conocernos mejor',
            instructions: [
              {
                text: 'Escribe tu nombre en el espacio en blanco a la derecha, de la siguiente forma:'
              },
              {
                text: 'El nombre es "tu nombre aquí!"',
                code: true
              },
              {
                text: 'y luego presiona Enter'
              }
            ],
            done: false,
            solution: /nombre = ['"]\w+['"];/i
          },
          {
            id: 2,
            title: "Sumar dos números",
            description: "test",
            instructions: "test",
            done: false
          }
        ]
      }]
    };

    this.handleChangeTheme = this.handleChangeTheme.bind(this);
    this.handleChangeFontSize = this.handleChangeFontSize.bind(this);
    this.checkSolution = debounce(this.checkSolution.bind(this), 1000);
  }

  componentDidMount() {
    this.props.fetchLessons(1);
  }

  handleChangeTheme(theme) {
    this.props.changeTextEditorTheme(theme);
  }

  handleChangeFontSize(fontSize) {
    this.props.changeFontSize(fontSize);
  }

  getActiveLesson() {
    //  TODO: Actually integrate redux
    const index = findIndex(this.state.lessons, (l) => l.done === false);
    return index > -1 ? this.state.lessons[index] : null;
  }

  getActiveExercise() {
    //  TODO: Actually integrate redux
    var { exercises } = this.getActiveLesson();

    if (exercises) {
      const index = findIndex(exercises, (e) => e.done === false);
      return index > -1 ? exercises[index] : null;
    }

    return null;
  }

  handleChangeText = (text) => {
    Translate.translate(text).then( ({ data }) => {
      let { pseudocode, javascript } = data;

      this.checkSolution(javascript, this.getActiveExercise());

      this.setState({
        text,
        pseudocode,
        javascript
      });
    });
  }

  checkSolution(javascript, exercise) {
    var javascript = javascript
      .split(/ +/).join(' ')
      .split(/\n+/).join('\n')
      .split(/\t+/).join('\t');

    if (exercise.solution.test(javascript)) {
      //  TODO: Set state / trigger redux
      console.log("Solution matches!");
      exercise.done = true;
      Modal.success({
        title: 'Bien hecho!',
        content: 'Sigamos...',
      });
    }
  }

  render() {
    return (
      <Row className="editorContainer">
        <Col span={6}>
          <LessonGuide exercise={this.getActiveExercise()}/>
       </Col>
        <Col span={9}>
          <TextEditor className="editor" theme="chrome" mode="text" height='80vh' wrapEnabled={true} showGutter={false} value={this.state.text} onChange={this.handleChangeText} />
        </Col>
        <Col span={9}>
          <TextEditor className="editor" readOnly={true} mode="text" height='39vh' value={this.state.pseudocode} />
          <TextEditor className="editor" readOnly={true} mode="javascript" height='39vh' value={this.state.javascript} />
        </Col>
      </Row>
    );
  }
}
