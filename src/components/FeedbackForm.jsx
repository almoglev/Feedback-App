import React, {useState} from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
    const [feedbackText, setFeedbackText] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [message, setMessage] = useState('');

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

    return (
        <Card>
            <form>
                <h2>Please rate your experience with us</h2>
                {/* @todo: rating select component */}
                <div className='input-group'>
                    <input 
                        type="text" 
                        placeholder='Write a review' 
                        onChange={handleTextChange}
                        value={feedbackText}
                    />
                    <Button type='submit' isDisabled={buttonDisabled}>Send</Button>
                </div>

                { message && <div className='message'>{message}</div>}

            </form>
        </Card>
    )
}

export default FeedbackForm
