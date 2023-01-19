import React from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import css from './Feedback.module.css';

class Feedback extends React.Component {
    static propTypes = {
    
    };

    render () {
        return (
            <FeedbackOptions className="feedbackOptions"
                            // options={} 
                            onLeaveFeedbackGood={} 
                            onLeaveFeedbackNeutral={}
                            onLeaveFeedbackBad={} 
            />
            // <FeedbackOptions options={} onLeaveFeedback={} />
        )
    };
};

export default Feedback;