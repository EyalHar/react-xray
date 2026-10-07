import { useEffect, useMemo, useRef, useState } from "react";
import * as Babel from "@babel/standalone";
import { buildSrcDoc } from "../sandbox/buildSrcDoc";

function transpile(code) {
  return Babel.transform(code, { presets: [["react", { runtime: "classic" }]] }).code;
}

export function Sandbox({ code, loopThreshold, onRenderEvent, onError, resetKey }) {
  const iframeRef = useRef(null);
  const [srcDoc, setSrcDoc] = useState("");

  const transpileResult = useMemo(() => {
    try {
      return { code: transpile(code), error: null };
    } catch (err) {
      return { code: null, error: err.message };
    }
  }, [code]);

  useEffect(() => {
    if (transpileResult.error) {
      onError(transpileResult.error);
      return;
    }
    const timeout = setTimeout(() => {
      setSrcDoc(buildSrcDoc(transpileResult.code, { loopThreshold }));
    }, 400);
    return () => clearTimeout(timeout);
  }, [transpileResult, loopThreshold, resetKey, onError]);

  useEffect(() => {
    function handleMessage(event) {
      const data = event.data;
      if (!data || data.source !== "react-xray-sandbox") return;
      if (data.type === "render") {
        onRenderEvent(data);
      } else if (data.type === "loop-detected") {
        onError("זוהתה לולאת renders אינסופית — הריצה נעצרה אוטומטית כדי להגן על הדפדפן.");
      } else if (data.type === "error") {
        onError(data.message);
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onRenderEvent, onError]);

  return (
    <iframe
      ref={iframeRef}
      key={resetKey}
      title="sandbox-preview"
      srcDoc={srcDoc}
      sandbox="allow-scripts"
      className="sandbox-frame"
    />
  );
}
