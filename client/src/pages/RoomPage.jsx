import { useCallback, useEffect, useState } from "react";
import { CodeEditor } from "../components/CodeEditor";
import { Sandbox } from "../components/Sandbox";
import { SolutionPanel } from "../components/SolutionPanel";
import { XRayPanel } from "../components/XRayPanel";

export function RoomPage({ room, onComplete }) {
  const [code, setCode] = useState(room.startingCode);
  const [renderEvents, setRenderEvents] = useState([]);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState(null);
  const [resetKey, setResetKey] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const handleCodeChange = useCallback((value) => {
    setCode(value);
    setRenderEvents([]);
    setStatus("idle");
    setErrorMessage(null);
  }, []);

  const handleRenderEvent = useCallback((data) => {
    setErrorMessage(null);
    setStatus("running");
    setRenderEvents((prev) => [...prev, data]);
  }, []);

  const handleError = useCallback((message) => {
    setErrorMessage(message);
    const isLoop = /לולאה|too many re-renders|maximum update depth/i.test(message);
    setStatus(isLoop ? "loop" : "fail");
  }, []);

  const handleReset = useCallback(() => {
    setCode(room.startingCode);
    setRenderEvents([]);
    setStatus("idle");
    setErrorMessage(null);
    setResetKey((k) => k + 1);
  }, [room]);

  useEffect(() => {
    if (renderEvents.length === 0 || status === "loop") return;
    const timer = setTimeout(() => {
      if (renderEvents.length <= room.passCriteria.maxRendersToPass) {
        setStatus("pass");
        onComplete(room.id);
      } else {
        setStatus("fail");
      }
    }, room.passCriteria.stabilizeMs);
    return () => clearTimeout(timer);
  }, [renderEvents.length, status, room, onComplete]);

  return (
    <>
      <header className="room-header">
        <h1>{room.title}</h1>
        <span className="room-concept">מושג מרכזי: {room.concept}</span>
      </header>

      <p className="room-briefing">{room.briefing}</p>

      <button className="solution-toggle-btn" onClick={() => setShowSolution((v) => !v)}>
        {showSolution ? "הסתר פתרון" : "לא מצליחים? הצג פתרון"}
      </button>

      {showSolution && <SolutionPanel room={room} onApplySolution={handleCodeChange} />}

      <div className="workspace">
        <div className="panel">
          <h3>עורך קוד</h3>
          <CodeEditor value={code} onChange={handleCodeChange} />
          <button className="reset-btn" onClick={handleReset}>
            איפוס לקוד המקורי
          </button>
        </div>

        <div className="panel">
          <h3>Preview</h3>
          <Sandbox
            code={code}
            loopThreshold={room.passCriteria.loopDetectionThreshold}
            onRenderEvent={handleRenderEvent}
            onError={handleError}
            resetKey={resetKey}
          />
        </div>

        <XRayPanel renderEvents={renderEvents} status={status} errorMessage={errorMessage} />
      </div>
    </>
  );
}
