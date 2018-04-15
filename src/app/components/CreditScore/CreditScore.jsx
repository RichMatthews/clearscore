import React from 'react';
import './creditScore.scss';

export default class CreditScore extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="creditScoreContainer">
          <div className="creditGenericText"> Your credit score is </div>
          <div className="creditScoreNumber">500</div>
          <div className="creditGenericText"> out of 700 </div>
        </div>
      </div>
    );
  }
}
