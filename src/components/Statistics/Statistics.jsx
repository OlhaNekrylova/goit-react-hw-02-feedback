import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <div className="statistics">
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>PositivePercentage: {positivePercentage}%</p>
            </div>
);

export default Statistics;