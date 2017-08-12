import React from 'react';
import _ from 'lodash';
import { Row } from 'antd';
import ClassCard from 'js/components/ClassCard';
import './styles.scss';

class Classes extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      classes: [
        {
          name: 'Nombre de clase',
          professor: 'Juan Perez',
          students: [
            'Coco',
            'Coco',
            'Coco',
            'Coco',
            'Coco',
            'Coco',
            'Coco'
          ],
          progress: 40
        },
        {
          name: 'Nombre de clase',
          professor: 'Juan Perez',
          students: [
            'Coco',
            'Coco',
            'Coco'
          ],
          progress: 70
        },
        {
          name: 'Nombre de clase',
          professor: 'Juan Perez',
          students: [
            'Coco',
            'Coco'
          ]
        },
        {
          name: 'Nombre de clase',
          professor: 'Juan Perez',
          students: [
            'Coco',
            'Coco'
          ]
        },
        {
          name: 'Nombre de clase',
          professor: 'Juan Perez',
          students: [
            'Coco',
            'Coco'
          ]
        },
        {
          name: 'Nombre de clase',
          professor: 'Juan Perez',
          students: [
            'Coco',
            'Coco'
          ]
        },
        {
          name: 'Nombre de clase',
          professor: 'Juan Perez',
          students: [
            'Coco',
            'Coco'
          ]
        },
        {
          name: 'Nombre de clase',
          professor: 'Juan Perez',
          students: [
            'Coco',
            'Coco'
          ]
        }
      ]
    }
  }

  render() {
    return (
        <div className="outer">
          <div className="middle">
            <div className="inner">
              {_.chunk(this.state.classes, 3).map((clazzGroup) => {
                return <Row gutter={16}>
                  {clazzGroup.map((clazz) => {
                      return <ClassCard
                        title={clazz.name}
                        professor={clazz.professor}
                        students={clazz.students.length}
                        subscribed={!!clazz.progress}
                        progress={clazz.progress}/>;
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