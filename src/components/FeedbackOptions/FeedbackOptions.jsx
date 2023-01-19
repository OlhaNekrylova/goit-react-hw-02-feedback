import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({onLeaveFeedbackGood, onLeaveFeedbackNeutral, onLeaveFeedbackBad}) => (
    <div>
        <button type="button" onClick={onLeaveFeedbackGood}>Good</button>
        <button type="button" onClick={onLeaveFeedbackNeutral}>Neutral</button>
        <button type="button" onClick={onLeaveFeedbackBad}>Bad</button>
    </div>
);

export default FeedbackOptions;