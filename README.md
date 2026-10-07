# React X-Ray

An interactive app for learning React — not by reading, but by watching code come together and seeing what React actually does behind the scenes.

The UI is in Hebrew (RTL).

## Features

### 🧱 Step-by-step learning
Learn React from zero, one small piece at a time:

- Every level starts from a **blank page**.
- Each click on **Next** adds a small chunk of code. New lines are highlighted.
- A side panel explains, in plain language, **what was added, what it does, and why**.
- On the final step the finished code runs in a **live preview**, followed by a short recap.
- The next level unlocks only after you confirm you understood the material. Progress is saved in `localStorage`.

| # | Level | Topics |
|---|-------|--------|
| 1 | First component | Components as functions, JSX, single root element, `className`, `export` |
| 2 | JavaScript inside JSX | `{ }` expressions, conditional rendering with `? :`, lists with `map` |
| 3 | Props | Passing data to components, destructuring, default values |
| 4 | State | `useState`, event handlers, conditional rendering with `&&` |
| 5 | Forms | Controlled inputs, `onChange`, derived values |
| 6 | Lists | Keys, immutable updates (adding with spread, removing with `filter`) |
| 7 | Effects | `useEffect`, dependency arrays, cleanup |

### 🔬 Debug rooms
Hands-on challenges where you fix real buggy code in a live editor. An **X-Ray panel** counts renders as they happen, and a room counts as passed only once the component behaves correctly.

- **Room 1 — The component that won't stop rendering**: the render model and `useState`.
- More rooms are planned (see [PLAN.md](PLAN.md)).

## Tech stack

- **Client:** React 19, Vite, CodeMirror, Babel Standalone (transpiles user code in the browser)
- **Server:** Node.js + Express
- **Sandbox:** user code runs inside an isolated `iframe` (`srcdoc`), wrapped in React's `Profiler` to report renders

## Project structure

```
react-xray/
├── client/                 React frontend (Vite)
│   └── src/
│       ├── pages/          StepByStepPage, RoomPage
│       ├── components/     Code views, sandbox, X-Ray panel, level picker
│       ├── lessons/        Step-by-step level content + code utilities
│       ├── rooms/          Debug room definitions
│       ├── hooks/          Progress tracking (localStorage)
│       └── sandbox/        Builds the iframe document
└── server/                 Node.js + Express backend
```

## Getting started

Requires Node.js 18+.

```bash
# Client
cd client
npm install
npm run dev        # http://localhost:5411

# Server (optional for now — only a health endpoint)
cd server
npm install
npm run dev        # http://localhost:4406
```

> The live preview loads React from `unpkg.com`, so an internet connection is required.

## Adding a new level

Levels live in [`client/src/lessons/levels.js`](client/src/lessons/levels.js). Each step stores the **full code snapshot** at that point. Newly added lines are detected automatically by diffing against the previous step.

```js
{
  id: "my-level",
  title: "Level title",
  goal: "What the learner will build",
  steps: [
    { title: "Blank page", explanation: ["..."], code: "" },
    { title: "Step title", explanation: ["Use `backticks` for inline code"], code: `...` },
  ],
  summary: ["Key takeaway 1", "Key takeaway 2"],
}
```

The final step's code must define an `App` component. It is what the live preview renders.
