import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const extensions = [javascript({ jsx: true })];

export function CodeEditor({ value, onChange }) {
  return (
    <CodeMirror
      value={value}
      height="420px"
      theme="dark"
      extensions={extensions}
      onChange={onChange}
      basicSetup={{ tabSize: 2 }}
    />
  );
}
