import React, {useState} from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

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
                    <Button type='submit'>Send</Button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
