// LCS over trimmed lines, so re-indented lines (e.g. after wrapping in a <div>) don't count as new.
export function findNewLines(prevCode, nextCode) {
  const prev = prevCode ? prevCode.split("\n").map((l) => l.trim()) : [];
  const next = nextCode ? nextCode.split("\n").map((l) => l.trim()) : [];

  const lcs = Array.from({ length: prev.length + 1 }, () => new Array(next.length + 1).fill(0));
  for (let i = prev.length - 1; i >= 0; i--) {
    for (let j = next.length - 1; j >= 0; j--) {
      lcs[i][j] = prev[i] === next[j] ? lcs[i + 1][j + 1] + 1 : Math.max(lcs[i + 1][j], lcs[i][j + 1]);
    }
  }

  const newLines = [];
  let i = 0;
  let j = 0;
  while (j < next.length) {
    if (i < prev.length && prev[i] === next[j]) {
      i++;
      j++;
    } else if (i < prev.length && lcs[i + 1][j] >= lcs[i][j + 1]) {
      i++;
    } else {
      if (next[j] !== "") newLines.push(j + 1);
      j++;
    }
  }
  return newLines;
}

// The sandbox loads React as a global script, so ES module syntax has to go.
export function toRunnableCode(code) {
  const body = code
    .replace(/^import .*$/gm, "")
    .replace(/^export default function /m, "function ")
    .replace(/^export default \w+;\s*$/m, "");
  return `const { useState, useEffect } = React;\n${body}`;
}
