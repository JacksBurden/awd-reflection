import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Slideout from 'slideout';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import GoalSidebar from './components/GoalSidebar';
import Goal from './components/Goal';

class App extends Component {

  state = {
    showSidebar: false,
    selectedGoal: ''
  };

  componentDidMount() {
    this.slideout = new Slideout({panel: document.getElementById('panel'),
    menu: document.getElementById('menu')});
  }


  render() {
    return (
      <Grid>
        <Header callback={this.toggleSidebar} />
        <Row>
          <GoalSidebar/>
          <Goal selectedGoal={this.state.selectedGoal} />
        </Row>
      </Grid>
    );
  }
}

export default App;
