import { useState } from "react";
import { useRoomProgress } from "./hooks/useRoomProgress";
import { RoomPage } from "./pages/RoomPage";
import { StepByStepPage } from "./pages/StepByStepPage";
import { room1 } from "./rooms/room1";
import "./App.css";

const rooms = [room1];
const STEP_BY_STEP_PAGE = "step-by-step";

function App() {
  const { completedRooms, markCompleted } = useRoomProgress();
  const [activePage, setActivePage] = useState(STEP_BY_STEP_PAGE);
  const activeRoom = rooms.find((room) => room.id === activePage);

  const linkClass = (pageId) => `room-link ${pageId === activePage ? "room-link--active" : ""}`;

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h2>React X-Ray</h2>
        <nav>
          <span className="nav-section-title">לימוד מהבסיס</span>
          <button className={linkClass(STEP_BY_STEP_PAGE)} onClick={() => setActivePage(STEP_BY_STEP_PAGE)}>
            🧱 בונים React צעד אחר צעד
          </button>

          <span className="nav-section-title">חדרי דיבאג</span>
          {rooms.map((room) => (
            <button key={room.id} className={linkClass(room.id)} onClick={() => setActivePage(room.id)}>
              {completedRooms[room.id] ? "✓ " : ""}
              {room.title}
            </button>
          ))}
          <div className="room-link room-link--locked">חדר 2 — בקרוב 🔒</div>
          <div className="room-link room-link--locked">חדר 3 — בקרוב 🔒</div>
        </nav>
      </aside>

      <main className="main-content">
        {activeRoom ? (
          <RoomPage key={activeRoom.id} room={activeRoom} onComplete={markCompleted} />
        ) : (
          <StepByStepPage />
        )}
      </main>
    </div>
  );
}

export default App;
