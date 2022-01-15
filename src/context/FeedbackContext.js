import {createContext, useState} from 'react';
import { v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [allFeedbacks, setAllFeedbacks] = useState([
        {
            id: 1,
            rating: 10,
            text: 'The service was super professional, thanks!',
          },
          {
            id: 2,
            rating: 9,
            text: 'Such a great company. I\'d give it a 10, but nothing is perfect, hehe',
          },
          {
            id: 3,
            rating: 7,
            text: 'I have to say it was a very good experience, but I was not fully impressed. I would offer to improve the support availability on your website',
          },
          {
            id: 4,
            rating: 10,
            text: 'Superb.',
          },
          {
            id: 5,
            rating: 4,
            text: 'You were very late and I had to miss a day at work, that is a shame',
          },
          {
            id: 6,
            rating: 8,
            text: 'Good service, nice and professional people, cheers!',
          },
          {
            id: 7,
            rating: 9,
            text: 'Super quick and generous, will recommend my friends for sure',
          },
          {
            id: 8,
            rating: 10,
            text: 'Amazing service! Wow!',
          },
          {
            id: 9,
            rating: 9,
            text: 'Will absolutely use your company again',
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

    // update a feedback
    const updateFeedback = (id, updatedItem) => {
        setAllFeedbacks(allFeedbacks.map((item)=> item.id === id ? {...item, ...updatedItem} : item))
        
        setFeedbackToEdit({   // turn the isEditMode flag off
            item:{},
            isEditMode: false
        })
    }

    return (
        <FeedbackContext.Provider
         value={{
            allFeedbacks,
            feedbackToEdit, // the feedback we edit (the item and the boolean)
            deleteFeedback,
            addFeedback,
            editFeedback, // the function
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;