import React from 'react';
import { Layout } from 'antd';
import Nav from 'js/components/Nav';
import './styles.scss';
import Request from 'js/services/request';
const { Header, Content, Footer } = Layout;

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout className="layout">
        <Header className="header">
          <Nav/>
        </Header>
        <Content className="content">
          { this.props.children }
        </Content>
        <Footer className="footer">
          <div className="inner">
            <span>
              <a href="https://github.com/marianfu/natural-language-frontend" target="_blank">Natural</a> ©2017
            </span>
            <span>
              Creado por <b>Gabriel Rodriguez</b> y <b>Mariano Furriel</b>
            </span>
          </div>
        </Footer>
      </Layout>
    );
  }
}

export default App;

