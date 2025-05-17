function Progress({ index, numQuestions }) {
  return (
    <header className="progress">
      <p>
        Question{" "}
        <strong>
          {index} / {numQuestions}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
