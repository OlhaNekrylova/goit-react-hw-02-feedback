import React from 'react';
import Feedback from './Feedback';
import Section from './Section';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  onLeaveFeedbackGood = () => {
    this.setState(prevState => ({
        good: prevState.good + 1,
    }));
  };

  onLeaveFeedbackNeutral = () => {
    this.setState(prevState => ({
        neutral: prevState.neutral + 1,
    }));
  };

  onLeaveFeedbackBad = () => {
    this.setState(prevState => ({
        bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = (event) => {
    const targetGood = event.target.good;
    const targetNeutral = event.target.neutral;
    const targetBad = event.target.bad;
    this.setState(prevState => ({
      total: prevState.total + targetGood + targetNeutral + targetBad,
      // total: prevState.total + EventTarget.good + EventTarget.neutral + EventTarget.bad,
  }));
  };

  countPositiveFeedbackPercentage = (event) => {
    const targetGood = event.target.good;
    const targetTotal = event.target.total;
    this.setState(prevState => ({
      positivePercentage: prevState.positivePercentage + Math.round(targetGood / targetTotal * 100),
  }));
};
    
  render () {
    return (
      <>
        <Feedback feedbackTitle="Please leave feedback" className="feedback"></Feedback>
        <Section sectionTitle="Statistics" className="sectionStatistics"></Section>
      </>
    )
  };
};


export default App;