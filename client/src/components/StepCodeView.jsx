import { useMemo } from "react";
import CodeMirror, { Decoration, EditorView } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const newLineDecoration = Decoration.line({ class: "cm-new-line" });

const basicSetup = {
  foldGutter: false,
  highlightActiveLine: false,
  highlightActiveLineGutter: false,
};

function highlightLines(lineNumbers) {
  return EditorView.decorations.of((view) => {
    const { doc } = view.state;
    const ranges = lineNumbers
      .filter((n) => n <= doc.lines)
      .map((n) => newLineDecoration.range(doc.line(n).from));
    return Decoration.set(ranges);
  });
}

export function StepCodeView({ code, newLines }) {
  const extensions = useMemo(
    () => [javascript({ jsx: true }), EditorView.lineWrapping, highlightLines(newLines)],
    [newLines]
  );

  if (!code) {
    return (
      <div className="step-code-empty">
        <span className="step-code-empty-icon">📄</span>
        <p>דף ריק</p>
        <span>לחצו על "הבא" כדי להוסיף את השורה הראשונה</span>
      </div>
    );
  }

  return (
    <div className="step-code" dir="ltr">
      <CodeMirror
        value={code}
        theme="dark"
        editable={false}
        readOnly
        extensions={extensions}
        basicSetup={basicSetup}
        minHeight="380px"
      />
    </div>
  );
}
