
const rootReducer = (state,action)=> {
    switch(action.type){
        case'SELECT_ANSWER':
           let response = state['response'];
            if(action.correctAnswer === action.selectedAnswer)
                response[action.id] = true;
            else
                response[action.id] = false;
            return {...state, response};      
        default:
         return state;
    }
}

export default rootReducer;