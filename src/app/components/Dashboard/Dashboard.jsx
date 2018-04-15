import React from 'react';
import axios from 'axios';
import Carousel from '../Carousel/Carousel';
import './dashboard.scss';

export default class Dashboard extends React.Component {

  state = {
    creditScoreNumber: 0
  }
  componentDidMount = () => {
    axios.get('https://s3.amazonaws.com/cdn.clearscore.com/native/interview_test/creditReportInfo.json').then((data) => {
      this.setState({creditScoreNumber: data.data.creditReportInfo.score})
    })
  }

  render(){
    return(
      <div className="container">
        <div className="dashboardContainer">
          <Carousel />
        </div>
      </div>
    )
  }
}
