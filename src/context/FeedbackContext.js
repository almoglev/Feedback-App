import {createContext, useState, useEffect} from 'react';
import { v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [allFeedbacks, setAllFeedbacks] = useState([]);
    const [feedbackToEdit, setFeedbackToEdit] = useState({
        item: {},
        isEditMode: false,
    })

    useEffect(()=>{
        fetchFeedbacks();
    }, [])

    // fetch all feedbacks from db.json
    const fetchFeedbacks = async () => {
        const response = await fetch("/feedback?_sort=id&_order=desc");
        const data = await response.json();
        setAllFeedbacks(data);
        setIsLoading(false);
    }

    // delete a feedback
    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure you want to delete this feeback?')){
            await fetch(`/feedback/${id}`, {method: 'DELETE'});
            fetchFeedbacks();
        }
    }

    // add a new feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        });

        const data = await response.json();
        setAllFeedbacks([data, ...allFeedbacks])
    }

    // set item to be updated
    const editFeedback = (feedbackToEdit) => {
        setFeedbackToEdit({
            item: feedbackToEdit,
            isEditMode: true,
        })
    }

    // update a feedback
    const updateFeedback = async (id, updatedItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem)
        })

        const data = await response.json();
        setAllFeedbacks(allFeedbacks.map((item)=> item.id === id ? {...item, ...data} : item))
        
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
            isLoading,
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