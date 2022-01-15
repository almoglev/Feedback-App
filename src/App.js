import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from "./components/FeedbackList";
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';

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
                <FeedbackStats allFeedbacks={allFeedbacks}/>

                <FeedbackList
                 allFeedbacks={allFeedbacks}
                 handleDelete = {deleteFeedback}/>
            </div>
        </>
    )
}

export default App;