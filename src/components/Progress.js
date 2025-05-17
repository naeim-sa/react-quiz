function Progress({ index, numQuestions, points, maxPossiblePoints }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index} />

      <p>
        Question
        <strong>
          {index + 1} / {numQuestions}
        </strong>
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
