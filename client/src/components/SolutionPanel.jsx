export function SolutionPanel({ room, onApplySolution }) {
  return (
    <div className="solution-panel">
      <h3>הפתרון</h3>
      <p className="solution-explanation">{room.solutionExplanation}</p>
      <pre className="solution-code">
        <code>{room.solutionCode}</code>
      </pre>
      <button className="apply-solution-btn" onClick={() => onApplySolution(room.solutionCode)}>
        טען את הפתרון לעורך
      </button>
    </div>
  );
}
