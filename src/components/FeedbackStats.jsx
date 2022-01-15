import React from 'react';
import PropTypes from 'prop-types';

function FeedbackStats(props) {

    let average = props.allFeedbacks.reduce((acc, curr)=>{
        return acc + curr.rating
    }, 0) / props.allFeedbacks.length

    average = average.toFixed(1).replace(/[.,]0$/,"");

    return (
        <div className='feedback-stats'>
            {/* <h4>{ props.allFeedbacks.length} Reviews</h4> */}
            {
                props.allFeedbacks.length == 1 ?             
                <h4>{ props.allFeedbacks.length } Review</h4>
                :
                <h4>{ props.allFeedbacks.length } Reviews</h4>
            }
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStats
