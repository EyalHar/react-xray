import { useCallback, useMemo, useState } from "react";
import { Sandbox } from "./Sandbox";
import { toRunnableCode } from "../lessons/codeUtils";

const ignoreRenderEvent = () => {};

export function LevelPreview({ ref, level, isLastLevel, isCompleted, onConfirm, onRestart }) {
  const [error, setError] = useState(null);
  const [runKey, setRunKey] = useState(0);
  const finalCode = level.steps[level.steps.length - 1].code;
  const runnableCode = useMemo(() => toRunnableCode(finalCode), [finalCode]);
  const allDone = isLastLevel && isCompleted;

  const handleError = useCallback((message) => setError(message), []);

  return (
    <section className="level-preview" ref={ref}>
      <div className="level-preview-result">
        <div className="level-preview-header">
          <h3>▶ התוצאה — הקוד בפעולה</h3>
          <button
            className="reset-btn"
            onClick={() => {
              setError(null);
              setRunKey((k) => k + 1);
            }}
          >
            הרץ מחדש
          </button>
        </div>
        <Sandbox
          code={runnableCode}
          loopThreshold={200}
          onRenderEvent={ignoreRenderEvent}
          onError={handleError}
          resetKey={runKey}
        />
        {error && <div className="xray-error"><code>{error}</code></div>}
      </div>

      <div className="level-check">
        <h3>מה למדנו ברמה הזו</h3>
        <ul className="level-summary">
          {level.summary.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {allDone ? (
          <p className="level-check-done">🏆 סיימתם את כל הרמות! עכשיו אתם מוכנים לחדרי הדיבאג.</p>
        ) : (
          <>
            <p className="level-check-question">הבנתם את כל השלבים? אפשר לעבור לרמה הבאה.</p>
            <button className="level-confirm-btn" onClick={onConfirm}>
              {isLastLevel ? "הבנתי — סיום המסלול ✓" : "הבנתי — לרמה הבאה ←"}
            </button>
          </>
        )}
        <button className="level-restart-btn" onClick={onRestart}>
          לעבור על הרמה שוב מההתחלה
        </button>
      </div>
    </section>
  );
}
