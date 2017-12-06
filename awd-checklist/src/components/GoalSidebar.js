import React from 'react';
import goalMap from '../goalMap';

const GoalSidebar = (props) => {
  return (<nav id="menu" className="slideout-menu" ref={props.slideoutRef}>
            <header>
            <div className="slideout-header">
              <h2 style={{"fontFamily": 'serif'}}> Learning Goals </h2>
            </div>
            </header>
            {Object.keys(goalMap).map((key, index) => {
              const goal = goalMap[key];
              return <div key={key} className={`sidebar-goal ${goal.name === props.selectedGoal.name ? 'selected' : ''}`} onClick={props.goalCallback.bind(null, goal)}>{index + 1}. {goal.name} </div>
            })}
          </nav>);
}

export default GoalSidebar;
