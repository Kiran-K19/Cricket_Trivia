import questionnaire from '../data/data';
const rootReducer = (state,action)=> {
    switch(action.type){
        case'SELECT_ANSWER':
           let submit = false;
           let response = Object.assign({},state['response']);
            if(action.correctAnswer === action.selectedAnswer)
                response[action.id] = true;
            else
                response[action.id] = false;
            return {...state, submit,response};   
        case'RESET_ANSWERS':
            return Object.assign({},state,{correct:0,incorrect:0,response:{}}); 
        case'SUBMIT_ANSWERS':
            let total = Object.values(state['response']);
            let correct=0;
            let incorrect=0;
            submit = true;
            if(questionnaire['questions'].length===total.length) 
                {    
                    total.forEach(function(element) {
                        if(element)
                            correct+=1;
                        else
                            incorrect+=1;
                    
                });
                return Object.assign({},state, {correct}, {incorrect}, {submit}); 
            }
            else
                return state; 

        default:
         return state;
    }
}

export default rootReducer;