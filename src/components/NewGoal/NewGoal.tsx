import React, { useState } from "react";
import "./NewGoal.css";

type Props = Readonly<{
  onAddGoal: (newGoal: Goal) => void;
}>;

const NewGoal: React.FC<Props> = ({ onAddGoal }) => {
  const [enteredText, setEnteredText] = useState("");

  const addGoalHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newGoal: Goal = {
      id: Math.random().toString(),
      text: enteredText
    };

    setEnteredText("");

    onAddGoal(newGoal);
  };

  const textChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredText(event.currentTarget.value);
  };

  return (
    <section className='new-goal'>
      <h2>Add a new Goal</h2>
      <form className='new-goal-form' onSubmit={addGoalHandler}>
        <input type='text' value={enteredText} onChange={textChangeHandler} />
        <button type='submit' disabled={enteredText === ""}>
          Add Goal
        </button>
      </form>
    </section>
  );
};

export default NewGoal;
