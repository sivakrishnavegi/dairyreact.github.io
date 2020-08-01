
export const createQuery = (query) => {
    return(dispatch, getState, {getFirebase, getFirestore})=>{
        const firestore = getFirestore();
        firestore.collection('queries').add({
            ...query ,
            createdAt: new Date()
        }).then(()=>{
       
            dispatch({type :'CREATE_QUERY', query});
     
        }).catch((err)=>{
            dispatch({type :'CREATE_QUERY_ERROR',err});
        })

    };
};