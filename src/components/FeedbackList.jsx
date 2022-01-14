import React from 'react'
import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types'


function FeedbackList(props) {
    if(!props.feedback || props.feedback.length == 0) {
        return <p>No feedback yet</p>
    }

    return (
        <div className='feedback-list'>
            {props.feedback.map((item)=>(
                <FeedbackItem key={item.id} item={item}/>
            ))}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback:  PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList
