import React, { useState } from "react";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn all about the Course Main Topic" },
    { id: "cg3", text: "Help other students in the course Q&A" }
  ]);

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals(courseGoals.concat(newGoal));
  };

  return (
    <div className='course-goals'>
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

// const App = () => {
//   // return <h1 title="This works!">A React App!</h1>;
//   // return React.createElement("h1", { title: "This works" }, "Hi from react");
//   return React.createElement(
//     "div",
//     { title: "This works" },
//     React.createElement("h1", { title: "This works" }, "Hi from react")
//   );
// };

// class App extends React.Component {
//   render() {
//     return <h1 title='This works!'>A React App!</h1>;
//   }
// }

export default App;
