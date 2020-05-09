import React from "react";
import "./GoalList.css";

import { Goal } from "../../types";

const GoalList = ({ goals }: { goals: Goal[] }): JSX.Element => {
  return (
    <section className='goals'>
      <ul className='goal-list'>
        {goals.map((goal) => {
          return <li key={goal.id}>{goal.text}</li>;
        })}
      </ul>
    </section>
  );
};

export default GoalList;
