function Options({ question, dispatch, ansewr }) {
  const hasAnswerd = ansewr !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === ansewr ? "answer" : ""} ${
            hasAnswerd
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          } `}
          key={option}
          desable={hasAnswerd}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
