import React from 'react';
import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion'


function FeedbackList(props) {
    if(!props.allFeedbacks || props.allFeedbacks.length === 0) {
        return <p>No feedback yet</p>
    }

    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {props.allFeedbacks.map((item)=>(
                    <motion.div
                     key={item.id}
                     initial={{opacity: 0}}
                     animate={{opacity: 1}}
                     exit={{opacity: 0}}
                     >
                        <FeedbackItem
                        key={item.id}
                        item={item} 
                        handleDelete={props.handleDelete}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )

    // return (
    //     <div className='feedback-list'>
    //         {props.allFeedbacks.map((item)=>(
    //             <FeedbackItem
    //              key={item.id}
    //              item={item} 
    //              handleDelete={props.handleDelete}
    //             />
    //         ))}
    //     </div>
    // )
}

FeedbackList.propTypes = {
    allFeedbacks:  PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
              ]).isRequired,

            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList
