import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import Header from './components/Header';
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

function App(){
    const [allFeedbacks, setAllFeedbacks] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this feeback?')){
            setAllFeedbacks(
                // filter out the feedback we wish to delete by returning a list of all feedbacks without it
                allFeedbacks.filter((itemToKeep)=> itemToKeep.id !== id)
            )
        }
    }

    return(
        <>
            <Header />
            <div className="container">
                <FeedbackForm />
                <FeedbackStats allFeedbacks={allFeedbacks}/>
                <FeedbackList
                 allFeedbacks={allFeedbacks}
                 handleDelete = {deleteFeedback}/>
            </div>
        </>
    )
}

export default App;