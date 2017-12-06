import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Slideout from 'slideout';
import './App.css';
import GoalSidebar from './components/GoalSidebar';
import Goal from './components/Goal';
import goalMap from './goalMap';
import _ from 'lodash';
import SuccessPage from './components/SuccessPage';

class App extends Component {

  state = {
    selectedGoal: goalMap.communication,
    completedMap: {}
  };

  componentDidMount() {
    this.slideout = new Slideout({panel: this.panel,
    menu: this.menu});
    this.toggleButton.onclick = () => {
      this.slideout.toggle();
    }
  }

  goalCallback = (goal) => {
    this.setState({
      selectedGoal: goal
    });
  }

  completeGoal = (goal) => {
      const { completedMap } = this.state;
      completedMap[goal.name] = !completedMap[goal.name];
      this.setState({
        completedMap
      });
  }

  areGoalsCompleted = () => {
    const { completedMap } = this.state;
    const keys = Object.keys(completedMap);

    return keys && keys.length === 11 && _.every(completedMap, (goal) => {
      return goal;
    });

  }

  refreshCallback = () => {
    this.setState({
      selectedGoal: goalMap.communication,
      completedMap: {}
    }, () => {
      this.slideout = new Slideout({panel: this.panel,
      menu: this.menu});
      this.toggleButton.onclick = () => {
        this.slideout.toggle();
      }
    })
  }


  render() {
    const { selectedGoal, completedMap } = this.state;
    const showSuccessPopup = this.areGoalsCompleted();
    const isSelectedGoalCompleted = completedMap ? completedMap[selectedGoal.name] : false;
    return showSuccessPopup ? <SuccessPage refreshCallback={this.refreshCallback} /> : (<div>
          <GoalSidebar slideoutRef={menu => this.menu = menu} goalCallback={this.goalCallback} selectedGoal={this.state.selectedGoal}/>
          <Goal selectedGoal={this.state.selectedGoal} toggleRef={toggleButton => this.toggleButton = toggleButton} completeGoal={this.completeGoal}
          slideoutRef={panel => this.panel = panel} isCompleted={isSelectedGoalCompleted} logoRef={logo => this.logo = logo}/>
          </div>
    );
  }
}

export default App;
