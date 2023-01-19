import React from 'react';
import PropTypes from 'prop-types';
import Statistics from '../Statistics/Statistics';
import css from './Section.module.css';

class Section extends React.Component {
    static propTypes = {
        sectionTitle: PropTypes.string,
        children: PropTypes.node,
    };

    render ({sectionTitle, children}) {
        return (
            <div>
                {sectionTitle && <h2>{sectionTitle}</h2>}
                {children}
                {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={} /> */}
            </div>
        
        )
    };
};

export default Section;