import React, {useState, useContext} from 'react';
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

    const {addFeedback} = useContext(FeedbackContext)

    const handleTextChange = (e) => {
        if (feedbackText === ''){
            setButtonDisabled(true)
            setMessage(null)
        } else if (feedbackText.trim().length < 10) {
            setMessage('Text must be at least 10 characters')
            setButtonDisabled(true)
        } else {
            setMessage(null)
            setButtonDisabled(false)
        }

        setFeedbackText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (feedbackText.trim().length >= 10){
            const newFeedbackItem = {
                text: feedbackText,
                rating: feedbackRating,
            }
            addFeedback(newFeedbackItem);
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
