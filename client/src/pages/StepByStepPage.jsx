import { useMemo, useRef, useState } from "react";
import { LevelPicker } from "../components/LevelPicker";
import { LevelPreview } from "../components/LevelPreview";
import { StepCodeView } from "../components/StepCodeView";
import { StepExplanation } from "../components/StepExplanation";
import { useLevelProgress } from "../hooks/useLevelProgress";
import { findNewLines } from "../lessons/codeUtils";
import { levels } from "../lessons/levels";
import "./StepByStepPage.css";

export function StepByStepPage() {
  const { completedCount, completeLevel } = useLevelProgress();
  const [levelIndex, setLevelIndex] = useState(() => Math.min(completedCount, levels.length - 1));
  const [stepIndex, setStepIndex] = useState(0);
  const previewRef = useRef(null);

  const level = levels[levelIndex];
  const step = level.steps[stepIndex];
  const totalSteps = level.steps.length;
  const isLastStep = stepIndex === totalSteps - 1;
  const isLastLevel = levelIndex === levels.length - 1;

  const newLines = useMemo(
    () => findNewLines(level.steps[stepIndex - 1]?.code ?? "", step.code),
    [level, stepIndex, step]
  );

  function goToLevel(index) {
    setLevelIndex(index);
    setStepIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleConfirm() {
    completeLevel(levelIndex);
    if (!isLastLevel) goToLevel(levelIndex + 1);
  }

  return (
    <div className="steps-page">
      <header className="steps-header">
        <div>
          <h1>בונים React צעד אחר צעד</h1>
          <p className="steps-subtitle">
            כל רמה מתחילה מדף ריק. בכל לחיצה על "הבא" נוסף חלק קטן לקוד, ובסוף רואים אותו רץ.
          </p>
        </div>
        <div className="steps-progress-total">
          {completedCount}/{levels.length} רמות הושלמו
        </div>
      </header>

      <LevelPicker
        levels={levels}
        activeIndex={levelIndex}
        completedCount={completedCount}
        onSelect={goToLevel}
      />

      <section className="level-intro">
        <span className="level-intro-label">רמה {levelIndex + 1}</span>
        <h2>{level.title}</h2>
        <p>{level.goal}</p>
      </section>

      <div className="step-dots" role="tablist" aria-label="שלבים">
        {level.steps.map((s, i) => (
          <button
            key={s.title}
            role="tab"
            aria-selected={i === stepIndex}
            className={`step-dot ${i < stepIndex ? "step-dot--done" : ""} ${i === stepIndex ? "step-dot--active" : ""}`}
            onClick={() => setStepIndex(i)}
            title={s.title}
          />
        ))}
      </div>

      <div className="steps-workspace">
        <StepExplanation
          step={step}
          stepIndex={stepIndex}
          totalSteps={totalSteps}
          newLineCount={newLines.length}
        />

        <div className="panel steps-code-panel">
          <h3>הקוד שלנו</h3>
          <StepCodeView code={step.code} newLines={newLines} />
        </div>
      </div>

      <nav className="steps-nav">
        <button className="steps-nav-btn" disabled={stepIndex === 0} onClick={() => setStepIndex((i) => i - 1)}>
          → הקודם
        </button>
        {isLastStep ? (
          <button
            className="steps-nav-btn steps-nav-btn--primary"
            onClick={() => previewRef.current?.scrollIntoView({ behavior: "smooth" })}
          >
            לתוצאה ↓
          </button>
        ) : (
          <button className="steps-nav-btn steps-nav-btn--primary" onClick={() => setStepIndex((i) => i + 1)}>
            הבא ←
          </button>
        )}
      </nav>

      {isLastStep && (
        <LevelPreview
          key={level.id}
          ref={previewRef}
          level={level}
          isLastLevel={isLastLevel}
          isCompleted={completedCount > levelIndex}
          onConfirm={handleConfirm}
          onRestart={() => goToLevel(levelIndex)}
        />
      )}
    </div>
  );
}
