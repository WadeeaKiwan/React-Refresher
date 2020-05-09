import React, { useState } from "react";
import "./NewGoal.css";

import { Goal } from "../../types";

const NewGoal = (props: { onAddGoal: Function }): JSX.Element => {
  const [enteredText, setEnteredText] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);

  const addGoalHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newGoal: Goal = {
      id: Math.random().toString(),
      text: enteredText
    };

    setEnteredText("");

    props.onAddGoal(newGoal);
  };

  const textChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredText(event.currentTarget.value);
  };

  return (
    <section className='new-goal'>
      <h2>Add a new Goal</h2>
      <form className='new-goal-form' onSubmit={addGoalHandler}>
        <input type='text' value={enteredText} onChange={textChangeHandler} />
        <button type='submit' disabled={enteredText === "" ? !disabled : disabled}>
          Add Goal
        </button>
      </form>
    </section>
  );
};

export default NewGoal;
