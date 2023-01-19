import React from 'react';
import PropTypes from 'prop-types';
import Statistics from '../Statistics';
import css from './Section.module.css';

class Section extends React.Component {
    static propTypes = {
    
    };

    render ({title, children}) {
        return (
            <div>
                {title && <h2>{title}</h2>}
                {children}
                {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={} /> */}
            </div>
        
        )
    };
};

export default Section;