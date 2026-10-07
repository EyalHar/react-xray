export function LevelPicker({ levels, activeIndex, completedCount, onSelect }) {
  return (
    <ol className="level-picker">
      {levels.map((level, index) => {
        const isLocked = index > completedCount;
        const isDone = index < completedCount;
        const stateClass = index === activeIndex ? "level-chip--active" : isDone ? "level-chip--done" : "";
        return (
          <li key={level.id}>
            <button
              className={`level-chip ${stateClass}`}
              disabled={isLocked}
              onClick={() => onSelect(index)}
              title={isLocked ? "יש להשלים את הרמה הקודמת" : level.title}
            >
              <span className="level-chip-number">{isLocked ? "🔒" : isDone ? "✓" : index + 1}</span>
              <span className="level-chip-title">{level.title}</span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
