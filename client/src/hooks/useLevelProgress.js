import { useCallback, useState } from "react";

const STORAGE_KEY = "react-xray-step-levels";

function readCompletedCount() {
  try {
    return Number(localStorage.getItem(STORAGE_KEY)) || 0;
  } catch {
    return 0;
  }
}

export function useLevelProgress() {
  const [completedCount, setCompletedCount] = useState(readCompletedCount);

  const completeLevel = useCallback((levelIndex) => {
    setCompletedCount((prev) => {
      const next = Math.max(prev, levelIndex + 1);
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  }, []);

  return { completedCount, completeLevel };
}
