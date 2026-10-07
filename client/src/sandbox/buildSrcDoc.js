const LOOP_GUARD_TEMPLATE = (loopThreshold) => `
      let renderCount = 0;
      let loopStopped = false;

      function onAppRender(id, phase, actualDuration) {
        renderCount += 1;
        window.parent.postMessage(
          { source: "react-xray-sandbox", type: "render", renderCount, phase, actualDuration },
          "*"
        );
        if (renderCount > ${loopThreshold} && !loopStopped) {
          loopStopped = true;
          window.parent.postMessage(
            { source: "react-xray-sandbox", type: "loop-detected", renderCount },
            "*"
          );
          root.unmount();
        }
      }
`;

export function buildSrcDoc(transpiledCode, { loopThreshold = 60 } = {}) {
  return `<!doctype html>
<html lang="he" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <script crossorigin="anonymous" src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin="anonymous" src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <style>
      body { font-family: system-ui, sans-serif; margin: 0; padding: 16px; }
      .counter-box { display: flex; flex-direction: column; gap: 12px; align-items: flex-start; }
      button {
        padding: 8px 16px; border-radius: 8px; border: none;
        background: #6366f1; color: white; font-size: 14px; cursor: pointer;
      }
      button:hover { background: #4f46e5; }
      button:disabled { background: #c7c8d6; cursor: not-allowed; }
      h1 { margin: 0 0 8px; }
      .card {
        padding: 20px 24px; border-radius: 14px; background: #f6f6ff;
        border: 1px solid #e2e3f5; display: flex; flex-direction: column;
        gap: 10px; align-items: flex-start;
      }
      .card p { margin: 0; }
      input {
        padding: 8px 12px; border-radius: 8px; border: 1px solid #c9cbe0;
        font-size: 14px; min-width: 220px;
      }
      input:focus { outline: 2px solid #6366f1; border-color: transparent; }
      ul { margin: 0; padding-inline-start: 20px; display: flex; flex-direction: column; gap: 6px; }
      li button { margin-inline-start: 10px; padding: 2px 8px; background: #ef4444; font-size: 12px; }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script>
      window.onerror = function (message) {
        window.parent.postMessage(
          { source: "react-xray-sandbox", type: "error", message: String(message) },
          "*"
        );
        return true;
      };

      try {
        ${transpiledCode}

        const container = document.getElementById("root");
        const root = ReactDOM.createRoot(container);
        ${LOOP_GUARD_TEMPLATE(loopThreshold)}

        root.render(
          React.createElement(
            React.Profiler,
            { id: "app", onRender: onAppRender },
            React.createElement(App)
          )
        );
      } catch (err) {
        window.parent.postMessage(
          { source: "react-xray-sandbox", type: "error", message: String(err && err.message ? err.message : err) },
          "*"
        );
      }
    </script>
  </body>
</html>`;
}
