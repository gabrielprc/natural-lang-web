import React from 'react';
import _ from 'lodash';
import { Row } from 'antd';
import ClassCard from 'js/components/ClassCard';
import './styles.scss';

class Classes extends React.Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   classes: [
    //     {
    //       name: 'Nombre de clase',
    //       professor: 'Juan Perez',
    //       students: [
    //         'Coco',
    //         'Coco',
    //         'Coco',
    //         'Coco',
    //         'Coco',
    //         'Coco',
    //         'Coco'
    //       ],
    //       progress: 40
    //     },
    //     {
    //       name: 'Nombre de clase',
    //       professor: 'Juan Perez',
    //       students: [
    //         'Coco',
    //         'Coco',
    //         'Coco'
    //       ],
    //       progress: 70
    //     },
    //     {
    //       name: 'Nombre de clase',
    //       professor: 'Juan Perez',
    //       students: [
    //         'Coco',
    //         'Coco'
    //       ]
    //     },
    //     {
    //       name: 'Nombre de clase',
    //       professor: 'Juan Perez',
    //       students: [
    //         'Coco',
    //         'Coco'
    //       ]
    //     },
    //     {
    //       name: 'Nombre de clase',
    //       professor: 'Juan Perez',
    //       students: [
    //         'Coco',
    //         'Coco'
    //       ]
    //     },
    //     {
    //       name: 'Nombre de clase',
    //       professor: 'Juan Perez',
    //       students: [
    //         'Coco',
    //         'Coco'
    //       ]
    //     },
    //     {
    //       name: 'Nombre de clase',
    //       professor: 'Juan Perez',
    //       students: [
    //         'Coco',
    //         'Coco'
    //       ]
    //     },
    //     {
    //       name: 'Nombre de clase',
    //       professor: 'Juan Perez',
    //       students: [
    //         'Coco',
    //         'Coco'
    //       ]
    //     }
    //   ]
    // }
    this.state = {
      classes: []
    }
  }

  componentDidMount() {
    fetch('api/classrooms', {
      method: 'GET'
    }).then(function(response) {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(response.error);
      }
    })
    .then((classes) => {
      this.setState({classes});
    })
    .catch(function(error) {
      console.error(error);
    });
  }

  render() {
    return (
        <div className="outer">
          <div className="middle">
            <div className="inner">
              {_.chunk(this.state.classes, 3).map((clazzGroup) => {
                return <Row gutter={16}>
                  {clazzGroup.map((clazz) => {
                      const id = clazz.id;
                      const name = clazz.name;
                      const professor = clazz.professor.firstName + ' ' + clazz.professor.lastName;
                      const students = clazz.students.length;
                      const subscribed = !!clazz.progress;

                      const totalExercises = clazz.exercises.length;
                      let completeExercises = 0;
                      for (let i = 0; i < totalExercises.length; i++) {
                        if (totalExercises[i].approved) {
                          completeExercises++;
                        }
                      }
                      const progress = completeExercises / totalExercises * 100;
                      
                      return <ClassCard
                        id={id}
                        title={name}
                        professor={professor}
                        students={students}
                        subscribed={subscribed}
                        progress={progress}/>;
                  })}
                </Row>
              })}
            </div>
          </div>
        </div>
    );
  }
}

export default Classes;