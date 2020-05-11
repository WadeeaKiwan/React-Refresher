import React from "react";
import "./GoalList.css";

type Props = Readonly<{
  goals: Goal[];
}>;

const GoalList: React.FC<Props> = ({ goals }) => {
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
