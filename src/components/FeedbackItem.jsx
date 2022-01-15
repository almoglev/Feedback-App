import PropTypes from 'prop-types'
import Card from "./shared/Card";
import { FaTimes } from 'react-icons/fa';
import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem(props) {
    const {deleteFeedback} = useContext(FeedbackContext)

    return (
        <Card>
            <div className='num-display'>{props.item.rating}</div>
            <button className='close' onClick={() => deleteFeedback(props.item.id)}>
                <FaTimes color='purple'/>
            </button>
            <div className='text-display'>{props.item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}
export default FeedbackItem
