import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import Header from './components/Header';
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4} from 'uuid';

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

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        // adding newFeedback to the existing list
        setAllFeedbacks([newFeedback, ...allFeedbacks])
    }

    return(
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats allFeedbacks={allFeedbacks}/>
                <FeedbackList
                 allFeedbacks={allFeedbacks}
                 handleDelete = {deleteFeedback}/>
            </div>
        </>
    )
}

export default App;