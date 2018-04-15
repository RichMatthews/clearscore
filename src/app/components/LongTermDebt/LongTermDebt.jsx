import React from 'react';
import './longTermDebt.scss';

export default class CreditScore extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="creditScoreContainer">
          <div className="creditGenericText"> Your long term debt total </div>
          <div className="creditScoreNumber">0</div>
          <div className="creditGenericText"> Total credit limit 0 </div>
        </div>
      </div>
    );
  }
}
