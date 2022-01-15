import React, {useState} from 'react';
import Card from './shared/Card';

function FeedbackForm() {
    const [feedbackText, setFeedbackText] = useState('');

    const handleTextChange = (e) => {
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
                    <button type='submit'>Send</button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
