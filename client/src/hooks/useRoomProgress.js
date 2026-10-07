import { useCallback, useState } from "react";

const STORAGE_KEY = "react-xray-progress";

function readProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function useRoomProgress() {
  const [completedRooms, setCompletedRooms] = useState(() => readProgress());

  const markCompleted = useCallback((roomId) => {
    setCompletedRooms((prev) => {
      const next = { ...prev, [roomId]: true };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return { completedRooms, markCompleted };
}
