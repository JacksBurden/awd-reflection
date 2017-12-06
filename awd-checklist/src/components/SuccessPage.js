import React from 'react';

const SuccessPage = ({ refreshCallback }) => {
  return (<div className="success-container"> 
            <div className="success-modal">
                <span> You have passed the learning goals, and your paper is ready to be handed in! Click below to start again for a new paper.</span>

              <button className="btn btn-lg refresh-button" onClick={refreshCallback}> Start Over </button>
            </div>
          </div>);
}

export default SuccessPage;
