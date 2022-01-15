import React, {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
    const {allFeedbacks} = useContext(FeedbackContext)

    let average = allFeedbacks.reduce((acc, curr)=>{
        return acc + curr.rating
    }, 0) / allFeedbacks.length

    average = average.toFixed(1).replace(/[.,]0$/,"");

    return (
        <div className='feedback-stats'>
            {
                allFeedbacks.length === 1 ?             
                <h4>{ allFeedbacks.length } Review</h4>
                :
                <h4>{ allFeedbacks.length } Reviews</h4>
            }
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}


export default FeedbackStats
