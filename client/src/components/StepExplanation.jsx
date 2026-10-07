function InlineCode({ text }) {
  return text.split("`").map((part, i) => (i % 2 === 1 ? <code key={i}>{part}</code> : part));
}

export function StepExplanation({ step, stepIndex, totalSteps, newLineCount }) {
  return (
    <article className="step-explanation" key={step.title}>
      <div className="step-explanation-meta">
        <span className="step-badge">
          שלב {stepIndex + 1} מתוך {totalSteps}
        </span>
        {newLineCount > 0 && <span className="step-added">+{newLineCount} שורות</span>}
      </div>
      <h2>{step.title}</h2>
      {step.explanation.map((paragraph) => (
        <p key={paragraph}>
          <InlineCode text={paragraph} />
        </p>
      ))}
    </article>
  );
}
