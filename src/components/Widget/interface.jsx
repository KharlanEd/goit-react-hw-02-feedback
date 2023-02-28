import React from "react";
import css from '../Widget/interface.module.css'
import { FeedbackOptions } from "./FeedbackOptions";
import { Notification } from "./Notification";
import { Section } from "./Section";
import { Statistics } from "./statisticts";



class Interface extends React.Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0
    }
    
    onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
    };
    
    countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    return Math.round((good / (good + neutral + bad)) * 100);
  };
        
    render() {
        const { good, neutral, bad } = this.state;
        const keys = Object.keys(this.state);

        return (<div className={css.container}>
            
            <Section title="Please leave your feedback" />
            <FeedbackOptions options={keys} onLeaveFeedback={this.onLeaveFeedback} />
            
            {this.countTotalFeedback() > 0 && (
             <Section title="Statistics">
            
            <Statistics good={good} neutral={neutral} bad={bad}  total={this.countTotalFeedback}
                        average={this.countPositiveFeedbackPercentage} />
            </Section>
            )}

            {this.countTotalFeedback() === 0 && (
          <Notification message="No feedback given"/>
        )}
        </div >
           
        )
        
    }
    
}

export default Interface;