export const levels = [
  {
    id: "first-component",
    title: "קומפוננטה ראשונה",
    goal: "לבנות את הקומפוננטה הכי פשוטה שיש — ולהבין ממה היא עשויה.",
    steps: [
      {
        title: "דף ריק",
        explanation: [
          "כל אפליקציית React בנויה מחלקים קטנים שנקראים קומפוננטות (Components). כל כפתור, כרטיס או עמוד שלם — כולם קומפוננטות.",
          "נתחיל מדף ריק לגמרי ונבנה קומפוננטה אחת, שורה אחרי שורה. לחצו על \"הבא\" כדי להוסיף את החלק הראשון.",
        ],
        code: "",
      },
      {
        title: "קומפוננטה היא פונקציה",
        explanation: [
          "זו כל ההגדרה: קומפוננטה ב-React היא פשוט פונקציה של JavaScript.",
          "שימו לב לשם `App` — הוא מתחיל באות גדולה. זה חובה: כך React מבדיל בין קומפוננטה שכתבנו לבין תגית HTML רגילה כמו `div`.",
        ],
        code: `function App() {
}`,
      },
      {
        title: "מה שמוחזר — מוצג",
        explanation: [
          "התפקיד של קומפוננטה הוא להחזיר (return) את מה שצריך להופיע על המסך.",
          "הסוגריים העגולים אחרי `return` מאפשרים לנו לכתוב את מה שמוחזר על פני כמה שורות. כרגע הם ריקים — עוד רגע נמלא אותם.",
        ],
        code: `function App() {
  return (
  );
}`,
      },
      {
        title: "JSX — HTML בתוך JavaScript",
        explanation: [
          "זה נראה כמו HTML, אבל זה בעצם JSX — תחביר מיוחד שמאפשר לכתוב \"תגיות\" ישירות בתוך קוד JavaScript.",
          "מאחורי הקלעים, React הופך את `<h1>` הזה לאלמנט אמיתי בדף. זו הדרך שבה מתארים \"איך המסך צריך להיראות\".",
        ],
        code: `function App() {
  return (
    <h1>שלום, React!</h1>
  );
}`,
      },
      {
        title: "אלמנט עוטף אחד",
        explanation: [
          "רצינו להוסיף פסקה, אבל קומפוננטה יכולה להחזיר רק אלמנט שורש אחד. לכן עטפנו את שני האלמנטים ב-`div` אחד.",
          "למה? כי `return` בפונקציה מחזיר ערך אחד בלבד — ו-JSX הוא בסוף ערך של JavaScript.",
        ],
        code: `function App() {
  return (
    <div>
      <h1>שלום, React!</h1>
      <p>זו הקומפוננטה הראשונה שלי</p>
    </div>
  );
}`,
      },
      {
        title: "className במקום class",
        explanation: [
          "כדי לעצב אלמנט נותנים לו מחלקת CSS. ב-HTML כותבים `class`, אבל ב-JSX כותבים `className`.",
          "הסיבה: `class` היא מילה שמורה ב-JavaScript (להגדרת מחלקות), ו-JSX הוא בסוף JavaScript.",
        ],
        code: `function App() {
  return (
    <div className="card">
      <h1>שלום, React!</h1>
      <p>זו הקומפוננטה הראשונה שלי</p>
    </div>
  );
}`,
      },
      {
        title: "ייצוא — כדי שאחרים ישתמשו",
        explanation: [
          "השורה האחרונה מייצאת את הקומפוננטה מהקובץ, כך שקובץ אחר (למשל `main.jsx`) יוכל לייבא אותה ולהציג אותה בדף.",
          "הקוד מוכן! גללו למטה כדי לראות מה הוא עושה בפועל.",
        ],
        code: `function App() {
  return (
    <div className="card">
      <h1>שלום, React!</h1>
      <p>זו הקומפוננטה הראשונה שלי</p>
    </div>
  );
}

export default App;`,
      },
    ],
    summary: [
      "קומפוננטה = פונקציה שמחזירה JSX",
      "שם של קומפוננטה מתחיל באות גדולה",
      "מחזירים אלמנט שורש אחד בלבד",
      "ב-JSX כותבים className ולא class",
    ],
  },
  {
    id: "jsx-expressions",
    title: "JavaScript בתוך JSX",
    goal: "להציג נתונים משתנים על המסך בעזרת סוגריים מסולסלים.",
    steps: [
      {
        title: "דף ריק",
        explanation: [
          "עד עכשיו הטקסט היה קבוע. באפליקציה אמיתית רוב מה שמוצג מגיע ממשתנים: שם משתמש, שעה, רשימת פריטים.",
          "ברמה הזו נלמד איך \"לשתול\" JavaScript בתוך JSX.",
        ],
        code: "",
      },
      {
        title: "שלד שכבר מכירים",
        explanation: [
          "זה השלד מהרמה הקודמת, עם קיצור אחד: `export default` נכתב ישירות לפני הפונקציה במקום בשורה נפרדת. זה בדיוק אותו דבר.",
        ],
        code: `export default function App() {
  return (
    <div className="card">
    </div>
  );
}`,
      },
      {
        title: "משתנה רגיל לפני ה-return",
        explanation: [
          "לפני ה-`return` אפשר לכתוב כל קוד JavaScript שרוצים: משתנים, חישובים, תנאים.",
          "הקוד הזה רץ בכל פעם ש-React מצייר את הקומפוננטה על המסך.",
        ],
        code: `export default function App() {
  const name = "דנה";

  return (
    <div className="card">
    </div>
  );
}`,
      },
      {
        title: "סוגריים מסולסלים { }",
        explanation: [
          "בתוך JSX, סוגריים מסולסלים אומרים: \"מכאן זה JavaScript\". React מחשב את מה שבפנים ומציג את התוצאה.",
          "לכן `{name}` יוצג כ-\"דנה\". אם נשנה את המשתנה — גם התצוגה תשתנה.",
        ],
        code: `export default function App() {
  const name = "דנה";

  return (
    <div className="card">
      <h1>שלום, {name}!</h1>
    </div>
  );
}`,
      },
      {
        title: "חישוב לפני התצוגה",
        explanation: [
          "הוספנו משתנה שמחשב את השעה הנוכחית (0 עד 23). זה סתם JavaScript — שום דבר מיוחד ל-React.",
        ],
        code: `export default function App() {
  const name = "דנה";
  const hour = new Date().getHours();

  return (
    <div className="card">
      <h1>שלום, {name}!</h1>
    </div>
  );
}`,
      },
      {
        title: "תנאי בתוך JSX",
        explanation: [
          "בתוך `{ }` אפשר לשים כל ביטוי (expression) — כל דבר שמחזיר ערך. כאן השתמשנו באופרטור התנאי `? :`.",
          "אם השעה לפני 12 — יוצג \"בוקר טוב\", אחרת \"ערב טוב\". אי אפשר לכתוב `if` רגיל בתוך JSX, כי `if` הוא פקודה ולא ביטוי.",
        ],
        code: `export default function App() {
  const name = "דנה";
  const hour = new Date().getHours();

  return (
    <div className="card">
      <h1>שלום, {name}!</h1>
      <p>{hour < 12 ? "בוקר טוב ☀️" : "ערב טוב 🌙"}</p>
    </div>
  );
}`,
      },
      {
        title: "מערך של נתונים",
        explanation: [
          "עכשיו נוסיף מערך — רשימה של מיומנויות. בדרך כלל נתונים כאלה מגיעים משרת, אבל העיקרון זהה.",
        ],
        code: `export default function App() {
  const name = "דנה";
  const hour = new Date().getHours();
  const skills = ["HTML", "CSS", "JavaScript"];

  return (
    <div className="card">
      <h1>שלום, {name}!</h1>
      <p>{hour < 12 ? "בוקר טוב ☀️" : "ערב טוב 🌙"}</p>
    </div>
  );
}`,
      },
      {
        title: "הפיכת מערך לרשימה עם map",
        explanation: [
          "`map` עובר על כל פריט במערך ומחזיר עבורו אלמנט JSX. כך מערך של מחרוזות הופך למערך של `<li>`, ו-React מציג את כולם.",
          "ה-`key` הוא מזהה ייחודי שעוזר ל-React לעקוב אחרי כל פריט ברשימה. נרחיב עליו ברמה של הרשימות.",
          "הקוד מוכן — גללו למטה לראות את התוצאה!",
        ],
        code: `export default function App() {
  const name = "דנה";
  const hour = new Date().getHours();
  const skills = ["HTML", "CSS", "JavaScript"];

  return (
    <div className="card">
      <h1>שלום, {name}!</h1>
      <p>{hour < 12 ? "בוקר טוב ☀️" : "ערב טוב 🌙"}</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}`,
      },
    ],
    summary: [
      "{ } בתוך JSX = כאן מתחיל JavaScript",
      "אפשר לשים בפנים רק ביטויים (לא if או for)",
      "תנאים כותבים עם ? :",
      "רשימות מציגים עם map, ולכל פריט key",
    ],
  },
  {
    id: "props",
    title: "Props — להעביר מידע לקומפוננטה",
    goal: "לבנות קומפוננטה אחת ולהשתמש בה כמה פעמים, כל פעם עם נתונים אחרים.",
    steps: [
      {
        title: "דף ריק",
        explanation: [
          "הכוח של קומפוננטות הוא שימוש חוזר: כותבים פעם אחת, משתמשים בהרבה מקומות.",
          "אבל כדי שזה יהיה שימושי, צריך דרך להגיד לכל עותק מה להציג. בשביל זה יש props.",
        ],
        code: "",
      },
      {
        title: "קומפוננטה קטנה",
        explanation: [
          "זו קומפוננטה קטנה שמציגה ברכה. כשה-JSX קצר ונכנס בשורה אחת, אפשר לוותר על הסוגריים העגולים אחרי `return`.",
        ],
        code: `function Greeting() {
  return <p>שלום!</p>;
}`,
      },
      {
        title: "שימוש בקומפוננטה כמו תגית",
        explanation: [
          "הוספנו את `App` — והיא משתמשת ב-`Greeting` כאילו זו תגית HTML: `<Greeting />`.",
          "הלוכסן בסוף (`/>`) סוגר את התגית, כי אין לה תוכן פנימי. כך בונים מסך שלם מחלקים קטנים.",
        ],
        code: `function Greeting() {
  return <p>שלום!</p>;
}

export default function App() {
  return (
    <div className="card">
      <Greeting />
    </div>
  );
}`,
      },
      {
        title: "שימוש חוזר",
        explanation: [
          "אפשר להשתמש באותה קומפוננטה כמה פעמים שרוצים.",
          "הבעיה: כל שלושת העותקים מציגים בדיוק את אותו דבר. איך נגרום לכל אחד מהם להציג שם אחר?",
        ],
        code: `function Greeting() {
  return <p>שלום!</p>;
}

export default function App() {
  return (
    <div className="card">
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  );
}`,
      },
      {
        title: "מעבירים props",
        explanation: [
          "props מעבירים כמו attributes ב-HTML: `name=\"דנה\"`. כל עותק מקבל ערך אחר.",
          "כרגע `Greeting` עוד לא משתמשת בהם — היא מקבלת את המידע, אבל מתעלמת ממנו. נתקן את זה בשלב הבא.",
        ],
        code: `function Greeting() {
  return <p>שלום!</p>;
}

export default function App() {
  return (
    <div className="card">
      <Greeting name="דנה" />
      <Greeting name="יוסי" />
      <Greeting name="מאיה" />
    </div>
  );
}`,
      },
      {
        title: "קוראים את ה-props",
        explanation: [
          "React אוסף את כל ה-attributes לאובייקט אחד ומעביר אותו כפרמטר הראשון של הפונקציה. נהוג לקרוא לו `props`.",
          "לכן `props.name` מכיל את השם שהועבר — ובכל עותק הוא שונה.",
        ],
        code: `function Greeting(props) {
  return <p>שלום, {props.name}!</p>;
}

export default function App() {
  return (
    <div className="card">
      <Greeting name="דנה" />
      <Greeting name="יוסי" />
      <Greeting name="מאיה" />
    </div>
  );
}`,
      },
      {
        title: "קיצור: פירוק (destructuring)",
        explanation: [
          "במקום לכתוב `props.name` כל פעם, אפשר \"לפרק\" את האובייקט כבר בפרמטר: `{ name }`.",
          "זה אותו דבר בדיוק, רק קצר וקריא יותר — וזו הצורה שתראו ברוב הקוד של React.",
        ],
        code: `function Greeting({ name }) {
  return <p>שלום, {name}!</p>;
}

export default function App() {
  return (
    <div className="card">
      <Greeting name="דנה" />
      <Greeting name="יוסי" />
      <Greeting name="מאיה" />
    </div>
  );
}`,
      },
      {
        title: "prop עם ערך ברירת מחדל",
        explanation: [
          "הוספנו prop שני, `emoji`, עם ערך ברירת מחדל: `emoji = \"👋\"`. מי שלא מעביר אותו — יקבל את ברירת המחדל.",
          "רק \"מאיה\" קיבלה אימוג'י משלה. הקוד מוכן — גללו למטה!",
        ],
        code: `function Greeting({ name, emoji = "👋" }) {
  return <p>{emoji} שלום, {name}!</p>;
}

export default function App() {
  return (
    <div className="card">
      <Greeting name="דנה" />
      <Greeting name="יוסי" />
      <Greeting name="מאיה" emoji="🚀" />
    </div>
  );
}`,
      },
    ],
    summary: [
      "props מעבירים לקומפוננטה כמו attributes",
      "הקומפוננטה מקבלת אותם כאובייקט בפרמטר הראשון",
      "נהוג לפרק אותם: function Greeting({ name })",
      "אפשר לתת ערך ברירת מחדל",
    ],
  },
  {
    id: "state",
    title: "State — זיכרון של קומפוננטה",
    goal: "לבנות מונה שמשתנה בלחיצה — ולהבין למה משתנה רגיל לא מספיק.",
    steps: [
      {
        title: "דף ריק",
        explanation: [
          "עד עכשיו כל מה שהצגנו היה קבוע. אבל אפליקציות מגיבות למשתמש: לחיצות, הקלדות, בחירות.",
          "כדי שקומפוננטה \"תזכור\" משהו ותתעדכן על המסך כשהוא משתנה, משתמשים ב-state.",
        ],
        code: "",
      },
      {
        title: "מייבאים את useState",
        explanation: [
          "`useState` הוא Hook — פונקציה מיוחדת של React. כל Hook מתחיל במילה `use`.",
          "אנחנו מייבאים אותו מהספרייה `react` כדי שנוכל להשתמש בו בקובץ.",
        ],
        code: `import { useState } from "react";`,
      },
      {
        title: "השלד",
        explanation: ["אותו שלד שכבר מכירים — קומפוננטה ריקה שמחזירה כרטיס."],
        code: `import { useState } from "react";

export default function App() {
  return (
    <div className="card">
    </div>
  );
}`,
      },
      {
        title: "יוצרים state",
        explanation: [
          "`useState(0)` יוצר \"תא זיכרון\" עם ערך התחלתי 0, ומחזיר שני דברים: הערך הנוכחי (`count`) ופונקציה לעדכון שלו (`setCount`).",
          "למה לא סתם `let count = 0`? כי הפונקציה רצה מחדש בכל ציור, והמשתנה היה מתאפס כל פעם. בנוסף, React לא היה יודע שצריך לצייר מחדש. `setCount` פותר את שתי הבעיות.",
        ],
        code: `import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
    </div>
  );
}`,
      },
      {
        title: "מציגים את הערך",
        explanation: ["בדיוק כמו משתנה רגיל — מציגים אותו בתוך `{ }`. כרגע יוצג 0."],
        code: `import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>{count}</h1>
    </div>
  );
}`,
      },
      {
        title: "כפתור שמעדכן",
        explanation: [
          "`onClick` מקבל פונקציה שתרוץ בעת לחיצה. כשהיא קוראת ל-`setCount`, React מעדכן את הערך ומצייר את הקומפוננטה מחדש — עם המספר החדש.",
          "שימו לב: מעבירים פונקציה `() => setCount(...)`, לא קוראים ל-`setCount` ישירות. אחרת הוא היה רץ מיד בזמן הציור, ולא בלחיצה.",
        ],
        code: `import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>הוסף 1</button>
    </div>
  );
}`,
      },
      {
        title: "פונקציה עם שם",
        explanation: [
          "כשהלוגיקה גדלה, נוח להוציא אותה לפונקציה נפרדת בתוך הקומפוננטה. נהוג לקרוא לה `handle...`.",
          "הפונקציה רק מוגדרת כאן — היא עוד לא רצה. נחבר אותה לכפתור בשלב הבא.",
        ],
        code: `import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="card">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>הוסף 1</button>
    </div>
  );
}`,
      },
      {
        title: "מחברים לכפתור",
        explanation: [
          "מעבירים את הפונקציה עצמה: `onClick={handleReset}` — בלי סוגריים! עם סוגריים היא הייתה רצה מיד.",
        ],
        code: `import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="card">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>הוסף 1</button>
      <button onClick={handleReset}>איפוס</button>
    </div>
  );
}`,
      },
      {
        title: "הצגה מותנית עם &&",
        explanation: [
          "`count >= 10 && <p>...</p>` פירושו: אם התנאי נכון — הצג את הפסקה, אחרת לא מציגים כלום.",
          "בכל לחיצה הקומפוננטה מצוירת מחדש והתנאי נבדק שוב. הקוד מוכן — נסו ללחוץ 10 פעמים!",
        ],
        code: `import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="card">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>הוסף 1</button>
      <button onClick={handleReset}>איפוס</button>
      {count >= 10 && <p>וואו, הגעתם ל-10! 🎉</p>}
    </div>
  );
}`,
      },
    ],
    summary: [
      "state = זיכרון שנשמר בין ציורים",
      "useState מחזיר [ערך, פונקציית עדכון]",
      "קריאה לפונקציית העדכון גורמת לציור מחדש",
      "לאירועים מעבירים פונקציה, לא קוראים לה",
    ],
  },
  {
    id: "forms",
    title: "טפסים — שדה קלט מבוקר",
    goal: "לחבר שדה טקסט ל-state, כך ש-React תמיד יודע מה כתוב בו.",
    steps: [
      {
        title: "דף ריק",
        explanation: [
          "שדות קלט הם הדרך העיקרית שבה משתמשים מכניסים מידע. ב-React מחברים כל שדה ל-state — זה נקרא \"קלט מבוקר\" (controlled input).",
        ],
        code: "",
      },
      {
        title: "ייבוא ושלד",
        explanation: ["את שני אלה כבר מכירים מהרמה הקודמת, אז הוספנו אותם יחד."],
        code: `import { useState } from "react";

export default function App() {
  return (
    <div className="card">
    </div>
  );
}`,
      },
      {
        title: "state לטקסט",
        explanation: ["הפעם ה-state הוא מחרוזת, והערך ההתחלתי שלה ריק: `\"\"`. כאן יישמר מה שהמשתמש מקליד."],
        code: `import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    <div className="card">
    </div>
  );
}`,
      },
      {
        title: "שדה שמחובר ל-state",
        explanation: [
          "`value={text}` אומר לשדה: \"התוכן שלך הוא תמיד מה שיש ב-text\".",
          "אבל יש בעיה — אם תריצו את זה, אי אפשר להקליד! React קובע שהערך הוא `text`, ואף אחד לא מעדכן את `text`. נתקן בשלב הבא.",
        ],
        code: `import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    <div className="card">
      <input value={text} placeholder="כתבו משהו..." />
    </div>
  );
}`,
      },
      {
        title: "onChange — מעדכנים בכל הקלדה",
        explanation: [
          "`onChange` רץ בכל הקשה על מקש. הוא מקבל אובייקט אירוע `e`, ו-`e.target.value` הוא הטקסט החדש שבשדה.",
          "אנחנו שומרים אותו ב-state, React מצייר מחדש, והשדה מציג את הערך המעודכן. זה המעגל של קלט מבוקר.",
        ],
        code: `import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    <div className="card">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="כתבו משהו..."
      />
    </div>
  );
}`,
      },
      {
        title: "מציגים את מה שהוקלד",
        explanation: [
          "כיוון שהטקסט נמצא ב-state, אפשר להשתמש בו בכל מקום בקומפוננטה. הפסקה תתעדכן בזמן אמת תוך כדי הקלדה.",
        ],
        code: `import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    <div className="card">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="כתבו משהו..."
      />
      <p>כתבתם: {text}</p>
    </div>
  );
}`,
      },
      {
        title: "ערך מחושב — בלי state נוסף",
        explanation: [
          "רוצים להציג כמה תווים הוקלדו? לא צריך state חדש! מחשבים את זה מתוך ה-state הקיים: `text.length`.",
          "כלל אצבע: אם אפשר לחשב משהו מ-state שכבר קיים — לא שומרים אותו בנפרד.",
        ],
        code: `import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    <div className="card">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="כתבו משהו..."
      />
      <p>כתבתם: {text}</p>
      <p>{text.length} תווים</p>
    </div>
  );
}`,
      },
      {
        title: "כפתור ניקוי",
        explanation: [
          "כיוון שהשדה מבוקר, כדי לנקות אותו מספיק לאפס את ה-state: `setText(\"\")`. השדה מתעדכן לבד.",
          "`disabled` מכבה את הכפתור כשאין מה לנקות. הקוד מוכן — נסו להקליד!",
        ],
        code: `import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    <div className="card">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="כתבו משהו..."
      />
      <p>כתבתם: {text}</p>
      <p>{text.length} תווים</p>
      <button onClick={() => setText("")} disabled={text === ""}>
        נקה
      </button>
    </div>
  );
}`,
      },
    ],
    summary: [
      "value + onChange = קלט מבוקר",
      "e.target.value הוא הטקסט החדש",
      "ערכים שאפשר לחשב — לא שומרים ב-state",
      "כדי לשנות את השדה, משנים את ה-state",
    ],
  },
  {
    id: "lists",
    title: "רשימות — הוספה ומחיקה",
    goal: "לבנות רשימת משימות קטנה ולהבין איך מעדכנים מערך ב-state.",
    steps: [
      {
        title: "דף ריק",
        explanation: [
          "ברמה הזו נשלב את כל מה שלמדנו: state, קלט מבוקר ו-map — כדי לבנות רשימת משימות שאפשר להוסיף לה ולמחוק ממנה.",
        ],
        code: "",
      },
      {
        title: "ייבוא ושלד",
        explanation: ["כבר מכירים — נוסיף יחד."],
        code: `import { useState } from "react";

export default function App() {
  return (
    <div className="card">
    </div>
  );
}`,
      },
      {
        title: "state שהוא מערך",
        explanation: [
          "state יכול להחזיק כל ערך — גם מערך של אובייקטים. לכל משימה יש `id` ייחודי ו-`text`.",
          "ה-`id` חשוב: הוא יהיה ה-key של כל פריט ברשימה.",
        ],
        code: `import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "ללמוד JSX" },
    { id: 2, text: "ללמוד props" },
  ]);

  return (
    <div className="card">
    </div>
  );
}`,
      },
      {
        title: "מציגים את הרשימה",
        explanation: [
          "`map` הופך כל משימה ל-`<li>`. ה-`key={todo.id}` מאפשר ל-React לזהות כל פריט גם אחרי הוספה או מחיקה.",
          "למה לא להשתמש באינדקס כ-key? כי כשמוחקים פריט מהאמצע, האינדקסים של כל השאר משתנים, ו-React עלול להתבלבל בין הפריטים.",
        ],
        code: `import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "ללמוד JSX" },
    { id: 2, text: "ללמוד props" },
  ]);

  return (
    <div className="card">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}`,
      },
      {
        title: "שדה למשימה חדשה",
        explanation: [
          "קלט מבוקר, בדיוק כמו ברמה הקודמת: state נפרד לטקסט, ושדה שמחובר אליו.",
          "לקומפוננטה מותר להחזיק כמה states שונים — כל אחד אחראי על דבר אחר.",
        ],
        code: `import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "ללמוד JSX" },
    { id: 2, text: "ללמוד props" },
  ]);
  const [text, setText] = useState("");

  return (
    <div className="card">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}`,
      },
      {
        title: "הוספה — מערך חדש, לא push",
        explanation: [
          "זה החלק הכי חשוב ברמה: לא משנים את המערך הקיים (`todos.push` אסור!), אלא יוצרים מערך חדש: `[...todos, חדש]`.",
          "React משווה את המערך הישן לחדש. אם זה אותו מערך בזיכרון — הוא חושב ששום דבר לא השתנה, ולא יצייר מחדש.",
        ],
        code: `import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "ללמוד JSX" },
    { id: 2, text: "ללמוד props" },
  ]);
  const [text, setText] = useState("");

  function handleAdd() {
    setTodos([...todos, { id: Date.now(), text }]);
    setText("");
  }

  return (
    <div className="card">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}`,
      },
      {
        title: "כפתור הוספה",
        explanation: [
          "מחברים את `handleAdd` לכפתור. אחרי ההוספה גם מנקים את השדה, כך שאפשר להקליד מיד את המשימה הבאה.",
        ],
        code: `import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "ללמוד JSX" },
    { id: 2, text: "ללמוד props" },
  ]);
  const [text, setText] = useState("");

  function handleAdd() {
    setTodos([...todos, { id: Date.now(), text }]);
    setText("");
  }

  return (
    <div className="card">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>הוסף</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}`,
      },
      {
        title: "מחיקה עם filter",
        explanation: [
          "גם במחיקה יוצרים מערך חדש: `filter` מחזיר מערך עם כל המשימות חוץ מזו שה-id שלה תואם.",
          "הפונקציה מקבלת את ה-`id` כפרמטר, כי היא צריכה לדעת איזו משימה למחוק.",
        ],
        code: `import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "ללמוד JSX" },
    { id: 2, text: "ללמוד props" },
  ]);
  const [text, setText] = useState("");

  function handleAdd() {
    setTodos([...todos, { id: Date.now(), text }]);
    setText("");
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="card">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>הוסף</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}`,
      },
      {
        title: "כפתור מחיקה לכל פריט",
        explanation: [
          "כל פריט מקבל כפתור משלו. `() => handleDelete(todo.id)` יוצר פונקציה קטנה שזוכרת את ה-id של הפריט הספציפי הזה.",
          "הקוד מוכן — נסו להוסיף ולמחוק משימות!",
        ],
        code: `import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "ללמוד JSX" },
    { id: 2, text: "ללמוד props" },
  ]);
  const [text, setText] = useState("");

  function handleAdd() {
    setTodos([...todos, { id: Date.now(), text }]);
    setText("");
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="card">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>הוסף</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      },
    ],
    summary: [
      "לכל פריט ברשימה key ייחודי ויציב",
      "לא משנים מערך ב-state — יוצרים מערך חדש",
      "הוספה: [...todos, item]",
      "מחיקה: todos.filter(...)",
    ],
  },
  {
    id: "effects",
    title: "useEffect — שעון חי",
    goal: "להריץ קוד מחוץ לציור עצמו (טיימר), ולנקות אחריו כמו שצריך.",
    steps: [
      {
        title: "דף ריק",
        explanation: [
          "לפעמים קומפוננטה צריכה לעשות משהו שאינו \"לצייר\": להפעיל טיימר, לטעון נתונים משרת, להאזין לאירוע. דברים כאלה נקראים side effects.",
          "בשבילם יש Hook מיוחד: `useEffect`. נבנה שעון שמתעדכן כל שנייה.",
        ],
        code: "",
      },
      {
        title: "מייבאים שני Hooks",
        explanation: ["הפעם מייבאים גם את `useEffect` וגם את `useState`. מפרידים ביניהם בפסיק."],
        code: `import { useEffect, useState } from "react";`,
      },
      {
        title: "state לשעה",
        explanation: [
          "שלד רגיל, ו-state שהערך ההתחלתי שלו הוא התאריך והשעה הנוכחיים: `new Date()`.",
        ],
        code: `import { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());

  return (
    <div className="card">
    </div>
  );
}`,
      },
      {
        title: "מציגים את השעה",
        explanation: [
          "`toLocaleTimeString` הופך את התאריך לשעה קריאה, כמו 14:05:32.",
          "אבל אם נריץ את זה עכשיו, השעה \"תקפא\" — היא מוצגת פעם אחת ולא משתנה, כי אף אחד לא קורא ל-`setTime`.",
        ],
        code: `import { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());

  return (
    <div className="card">
      <h1>{time.toLocaleTimeString("he-IL")}</h1>
    </div>
  );
}`,
      },
      {
        title: "useEffect ריק",
        explanation: [
          "`useEffect` מקבל פונקציה ש-React מריץ אחרי שהקומפוננטה הופיעה על המסך — לא בזמן הציור עצמו.",
          "המערך הריק `[]` בסוף אומר: \"הרץ את זה רק פעם אחת, אחרי הציור הראשון\". בלעדיו, ה-effect היה רץ אחרי כל ציור.",
        ],
        code: `import { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
  }, []);

  return (
    <div className="card">
      <h1>{time.toLocaleTimeString("he-IL")}</h1>
    </div>
  );
}`,
      },
      {
        title: "מפעילים טיימר",
        explanation: [
          "`setInterval` מריץ פונקציה כל 1000 מילישניות (שנייה). בכל פעם אנחנו מעדכנים את ה-state לשעה החדשה, ו-React מצייר מחדש.",
          "שמרנו את המזהה של הטיימר ב-`id` — מיד נבין למה.",
        ],
        code: `import { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <div className="card">
      <h1>{time.toLocaleTimeString("he-IL")}</h1>
    </div>
  );
}`,
      },
      {
        title: "ניקוי (cleanup)",
        explanation: [
          "פונקציה שמוחזרת מתוך ה-effect היא פונקציית ניקוי. React מריץ אותה כשהקומפוננטה יורדת מהמסך.",
          "בלי `clearInterval`, הטיימר היה ממשיך לרוץ ברקע לנצח, גם אחרי שהשעון כבר לא מוצג — זו \"דליפת זיכרון\". כלל: כל מה שמפעילים ב-effect — מנקים ב-return.",
          "הקוד מוכן — גללו למטה וראו את השעון מתקתק!",
        ],
        code: `import { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="card">
      <h1>{time.toLocaleTimeString("he-IL")}</h1>
    </div>
  );
}`,
      },
    ],
    summary: [
      "useEffect רץ אחרי הציור, לא בזמנו",
      "מערך התלויות [] = רק פעם אחת",
      "פונקציה שמוחזרת מה-effect = ניקוי",
      "כל טיימר או מאזין שמפעילים — מנקים",
    ],
  },
];
