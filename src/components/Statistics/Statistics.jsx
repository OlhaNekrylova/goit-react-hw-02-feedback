import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import Notification from 'components/Notification/Notification';

const Statistics = ({
    good, 
    neutral, 
    bad,
    total, 
    positivePercentage
}) => (
    <>
        {total ? (
            <ul className={css.statistics}>
                <li className={css.options}>Good: {good}</li>
                <li className={css.options}>Neutral: {neutral}</li>
                <li className={css.options}>Bad: {bad}</li>
                <li className={css.options}>Total: {total}</li>
                <li className={css.options}>Positive feedback: {positivePercentage}%</li>
            </ul>
        ) : (<Notification message="There is no feedback" />
        )}
    </>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};

export default Statistics;