import React from 'react'
import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types'


function FeedbackList(props) {
    if(!props.allFeedbacks || props.allFeedbacks.length === 0) {
        return <p>No feedback yet</p>
    }

    return (
        <div className='feedback-list'>
            {props.allFeedbacks.map((item)=>(
                <FeedbackItem
                 key={item.id}
                 item={item} 
                 handleDelete={props.handleDelete}
                />
            ))}
        </div>
    )
}

FeedbackList.propTypes = {
    allFeedbacks:  PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList
