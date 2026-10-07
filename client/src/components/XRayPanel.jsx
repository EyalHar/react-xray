const STATUS_LABEL = {
  idle: { text: "ממתין לריצה...", tone: "neutral" },
  running: { text: "עוקב אחרי renders...", tone: "neutral" },
  pass: { text: "✓ עבר! הקומפוננטה התייצבה", tone: "pass" },
  fail: { text: "עדיין יותר מדי renders — נסו שוב", tone: "fail" },
  loop: { text: "⚠ זוהתה לולאת renders אינסופית", tone: "fail" },
};

export function XRayPanel({ renderEvents, status, errorMessage }) {
  const total = renderEvents.length;
  const last20 = renderEvents.slice(-20);
  const statusInfo = STATUS_LABEL[status] ?? STATUS_LABEL.idle;

  return (
    <div className="xray-panel">
      <h3>X-Ray Panel</h3>

      <div className="xray-counter" key={total}>
        <span className="xray-counter-number">{total}</span>
        <span className="xray-counter-label">renders</span>
      </div>

      <div className="xray-sparkline">
        {last20.map((event, i) => (
          <div
            key={`${event.renderCount}-${i}`}
            className="xray-bar"
            style={{ height: `${Math.min(100, 20 + event.actualDuration * 40)}%` }}
            title={`render #${event.renderCount}`}
          />
        ))}
        {last20.length === 0 && <span className="xray-empty">אין renders עדיין</span>}
      </div>

      <div className={`xray-status xray-status--${statusInfo.tone}`}>{statusInfo.text}</div>

      {errorMessage && (
        <div className="xray-error">
          {status === "loop" && (
            <p className="xray-error-hint">
              זה בדיוק הבאג! React עצמו זיהה שקריאה ל-setState קורית בכל render בלי תנאי, ועצר את עצמו לפני שהדפדפן קפא.
            </p>
          )}
          <code>{errorMessage}</code>
        </div>
      )}
    </div>
  );
}
