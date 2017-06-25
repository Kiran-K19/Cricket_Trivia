
export function selectAnswer(id,correctAnswer,selectedAnswer) {
  return {
    type: 'SELECT_ANSWER',
    id,
    correctAnswer,
    selectedAnswer
  }
}

export function submitAnswers() {
  return {
    type: 'SUBMIT_ANSWERS'
  }
}


export function resetAnswers() {
  return {
    type: 'RESET_ANSWERS'
  }
}