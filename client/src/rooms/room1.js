export const room1 = {
  id: "room-1",
  title: "החדר הראשון: הקומפוננטה שלא מפסיקה לרנדר",
  concept: "מודל ה-render ו-useState",
  briefing: `בקוד הזה יש קומפוננטת Counter שאמורה פשוט להציג מספר ולעלות אותו בלחיצה על כפתור.
אבל משהו בקוד גורם לה לרנדר שוב ושוב בלי הפסקה — עוד לפני שלחצתם על שום דבר.

המשימה: תקנו את הקוד כך שהקומפוננטה תרנדר פעם אחת בלבד בטעינה,
ותרנדר מחדש רק כשלוחצים על הכפתור.

רמז: תסתכלו היטב על ההבדל בין "לקרוא לפונקציה שמעדכנת state" לבין "להגדיר מה קורה כשלוחצים".`,
  startingCode: `function Counter() {
  const [count, setCount] = React.useState(0);

  // באג: זה קורה בכל render, לא רק בלחיצה!
  setCount(count + 1);

  return (
    <div className="counter-box">
      <p>הספירה: {count}</p>
      <button onClick={() => setCount(count + 1)}>לחצו כאן</button>
    </div>
  );
}

function App() {
  return <Counter />;
}`,
  passCriteria: {
    maxRendersToPass: 3,
    stabilizeMs: 1200,
    loopDetectionThreshold: 60,
  },
  solutionCode: `function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="counter-box">
      <p>הספירה: {count}</p>
      <button onClick={() => setCount(count + 1)}>לחצו כאן</button>
    </div>
  );
}

function App() {
  return <Counter />;
}`,
  solutionExplanation: `הבאג היה שהשורה setCount(count + 1) רצה בגוף הקומפוננטה עצמו — כלומר בכל render, לא רק בלחיצה.
כל קריאה ל-setCount מבקשת מ-React render נוסף, וב-render הנוסף הזה השורה רצה שוב ומבקשת עוד render... וכן הלאה עד אינסוף.

הפתרון: להעביר את הקריאה ל-setCount לתוך פונקציית onClick של הכפתור.
כך הקוד "מגדיר מה יקרה בלחיצה" במקום "לגרום לזה לקרות מיד". עכשיו setCount רץ רק כשבאמת לוחצים — לא בכל render.

זה ההבדל המרכזי בין קוד שרץ באופן מיידי בזמן ה-render, לבין קוד שרק מוגדר בזמן ה-render ורץ מאוחר יותר כתגובה לאירוע.`,
};
