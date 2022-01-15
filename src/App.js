import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from "./components/FeedbackList";
import FeedbackData from './data/FeedbackData';

function App(){
    const [feedback, setFeedback] = useState(FeedbackData);
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this feeback?')){
            setFeedback(
                // filter out the feedback we wish to delete by returning a list of all feedbacks without it
                feedback.filter((itemToKeep)=> itemToKeep.id !== id)
            )
        }
    }
    return(
        <>
            <Header />
            <div className="container">
                <FeedbackList
                 feedback={feedback}
                 handleDelete = {deleteFeedback}/>
            </div>
        </>
    )
}

export default App;