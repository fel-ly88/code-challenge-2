import React from 'react'

function Overview ({ goals }) {

    const sum = goals.reduce((total,goal) => total + Number(goal.amount) , 0);
    const totalGoals = goals.length;
    const totalSaved = goals.reduce((sums , h) => sum + h.savedAmount , 0);
    const completedGoals = goals.filter(g => g.savedAmount >= g.targetAmount).length;

  return (
    <div className='overView'>
        <h2>Overview</h2>
        <p>Total Goals: {totalGoals}</p>
        <p>Total Saved: {totalSaved}</p>
        <p>Completed Goals:{completedGoals}</p>

    </div>
  )
}

export default Overview