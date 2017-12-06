import React from 'react';
import goalMap from '../goalMap';

const Goal = (props) => {
  const { slideoutRef, toggleRef, selectedGoal, completeGoal, isCompleted } = props;
  return (<main id="panel" ref={slideoutRef}>
            <header className="header-container">
              <button className="toggle-button" ref={toggleRef}> View Learning Goals </button>
              <div className="page-header"> <div className="header-text">Advanced Writing in the Disciplines <br/>
              Learning Goals Checklist </div></div>
            </header>
            <div className="selected-goal">Goal: {selectedGoal.name} </div>
            <div className="syllabus-description"> Syllabus description: {selectedGoal.description} </div>
            <div className="content-wrapper">
            <div className="jumbotron">
            <div className="tips">
              <span>Tips: {selectedGoal.tips}</span>
              <button className="btn btn-lg checkoff-button" onClick={completeGoal.bind(null, selectedGoal)}> {isCompleted ? "Mark as Incomplete" : "Mark as Completed"} </button>
            </div>
            </div>
            </div>
            <div className="logo-div">
              NORTHEASTERN
            </div>
          </main>);
}

export default Goal;
