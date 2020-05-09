import React, { useState, Fragment } from "react";

import Header from "./components/Header/Header";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import "./App.css";

import { Goal } from "./types";

const DEFAULT_GOALS: Goal[] = [
  { id: "cg1", text: "Finish the Course" },
  { id: "cg2", text: "Learn all about the Course Main Topic" },
  { id: "cg3", text: "Help other students in the course Q&A" }
];

const App = (): JSX.Element => {
  const [courseGoals, setCourseGoals] = useState<Goal[]>(DEFAULT_GOALS);

  const addNewGoalHandler = (newGoal: Goal) => {
    // No need to use functional form when we don't need the previous state
    // setCourseGoals(courseGoals.concat(newGoal));
    // Use functional form to update the state when updating depends on the previous state
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (
    <Fragment>
      <Header />
      <main>
        <NewGoal onAddGoal={addNewGoalHandler} />
        <GoalList goals={courseGoals} />
      </main>
    </Fragment>
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
