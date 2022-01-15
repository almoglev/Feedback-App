import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackData from './data/FeedbackData';
import Header from './components/Header';
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import { v4 as uuidv4} from 'uuid';
import AboutIconLink from './components/AboutIconLink';

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
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route path='/' element={
                        <>
                            <FeedbackForm handleAdd={addFeedback}/>
                            <FeedbackStats allFeedbacks={allFeedbacks}/>
                            <FeedbackList
                            allFeedbacks={allFeedbacks}
                            handleDelete = {deleteFeedback}/>
                            <AboutIconLink />
                        </>
                    } />
                    <Route path='/about' element={<About />}/>
                </Routes>

                
            </div>
        </Router>
    )
}

export default App;