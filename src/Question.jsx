import React from 'react';

const Question = ({ question, handleAnswerOptionClick }) => {
  return (
    <div className='question-section'>
      <div className='question-text'>{question.questionText}</div>
      <div className='answer-section'>
        {question.answerOptions.map((answerOption, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
          >
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
