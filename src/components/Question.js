import Options from "./Options";

function Question({ question, dispatch, ansewr }) {
  console.log(question);

  return (
    <div>
      <h4>{question.question}</h4>

      <Options question={question} dispatch={dispatch} ansewr={ansewr} />
    </div>
  );
}

export default Question;
