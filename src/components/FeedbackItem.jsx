import PropTypes from 'prop-types'
import Card from "./shared/Card";
import { FaTimes } from 'react-icons/fa';

function FeedbackItem(props) {
    return (
        <Card>
            <div className='num-display'>{props.item.rating}</div>
            <button className='close' onClick={() => props.handleDelete(props.item.id)}>
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
