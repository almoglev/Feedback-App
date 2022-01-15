import React, {useState, useContext, useEffect} from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { FaShare } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackForm() {
    const [feedbackText, setFeedbackText] = useState('');
    const [feedbackRating, setFeedbackRating] = useState(10);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const {addFeedback, feedbackToEdit, updateFeedback} = useContext(FeedbackContext);

    useEffect(() => {
        if(feedbackToEdit.isEditMode === true){
            setButtonDisabled(false);
            setFeedbackText(feedbackToEdit.item.text);
            setFeedbackRating(feedbackToEdit.item.rating);
        }
    }, [feedbackToEdit])

    const handleTextChange = ({target: {value}}) => { // get the value
        if (value === '') {
            setButtonDisabled(true)
          setMessage(null)
        } else if (value !== '' && value.trim().length < 10) { // check for less than
          setMessage('Text must be at least 10 characters')
          setButtonDisabled(true)
        } else {
          setMessage(null)
          setButtonDisabled(false)
        }
        setFeedbackText(value)
      }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (feedbackText.trim().length >= 10) {
            const newFeedbackItem = {
                text: feedbackText,
                rating: feedbackRating,
            }

            feedbackToEdit.isEditMode ?
                updateFeedback(feedbackToEdit.item.id, newFeedbackItem)
            : 
                addFeedback(newFeedbackItem, newFeedbackItem);

            setFeedbackText('');
            setButtonDisabled(true);
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your experience with us?</h2>
                <RatingSelect select={(feedbackRating)=>setFeedbackRating(feedbackRating)}/>
                <div className='input-group'>
                    <input 
                        type="text" 
                        placeholder='Write a review' 
                        onChange={handleTextChange}
                        value={feedbackText}
                    />
                    <Button type='submit' isDisabled={buttonDisabled}><FaShare/></Button>
                </div>

                { message && <div className='message'>{message}</div>}

            </form>
        </Card>
    )
}

export default FeedbackForm
