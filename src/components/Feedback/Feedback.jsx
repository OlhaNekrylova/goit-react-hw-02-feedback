import React from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import css from './Feedback.module.css';

class Feedback extends React.Component {
    static propTypes = {
        feedbackTitle: PropTypes.string,
        children: PropTypes.node,
    };

    render ({feedbackTitle, children}) {
        return (
            <div>
                {feedbackTitle && <h2>{feedbackTitle}</h2>}
                {children}
                {/* <FeedbackOptions className="feedbackOptions"
                            options={} 
                            onLeaveFeedbackGood={} 
                            onLeaveFeedbackNeutral={}
                            onLeaveFeedbackBad={} 
            />
            <FeedbackOptions options={} onLeaveFeedback={} /> */}
            </div>
        
        )
    };
};

export default Feedback;