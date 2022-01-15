import {createContext, useState} from 'react';
import { v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [allFeedbacks, setAllFeedbacks] = useState([
        {
            id: 1,
            rating: 10,
            text: 'This is feedback item 1',
          },
          {
            id: 2,
            rating: 9,
            text: 'This is feedback item 2',
          },
          {
            id: 3,
            rating: 7,
            text: 'This is feedback item 3',
          },
    ]);

    const [feedbackToEdit, setFeedbackToEdit] = useState({
        item: {},
        isEditMode: false,
    })

    // delete a feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this feeback?')){
            setAllFeedbacks(
                // filter out the feedback we wish to delete by returning a list of all feedbacks without it
                allFeedbacks.filter((itemToKeep)=> itemToKeep.id !== id)
            )
        }
    }

    // add a new feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        // adding newFeedback to the existing list
        setAllFeedbacks([newFeedback, ...allFeedbacks])
    }

    // set item to be updated
    const editFeedback = (feedbackToEdit) => {
        setFeedbackToEdit({
            item: feedbackToEdit,
            isEditMode: true,
        })
    }

    return (
        <FeedbackContext.Provider
         value={{
            allFeedbacks,
            deleteFeedback,
            addFeedback,
            editFeedback, // the function
            feedbackToEdit, // the feedback we edit (the item and the boolean)
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;