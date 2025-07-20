import React from 'react';
import GoalItem from './GoalItem';

function GoalList({goals, onUpdateGoal , onDeleteGoal}){
  return (
    <div>
        <h2>Your Goals</h2>
        {goals.map(goal => (
            <GoalItem
                key={goal.id}
                goal={goal}
                onUpdateGoal={onUpdateGoal}
                onDeleteGoal={onDeleteGoal}
            />
        ))}
    </div>
  )
}

export default GoalList