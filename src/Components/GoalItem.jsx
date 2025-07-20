import React , {useState} from 'react';

function GoalItem({ goal , isNav, onUpdateGoal , onDeleteGoal }){

    const[deposit ,setDeposit] = useState('');
    const progress = Math.min((goal.savedAmount / goal.targetAmount) *100 , 100 );
    const daysLeft = Math.ceil((new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24));
    const isCompleted = goal.savedAmount >= goal.targetAmount;
    const isOverdue = daysLeft < 0 && !isCompleted;
    const isNearDeadline = daysLeft <= 30 && daysLeft > 0 && !isCompleted;


    const handleDeposit = () => {
        const amount = parseFloat(deposit);
        if (isNav){
            console.log("Deposit Allowed");
        }
    };
  return (
    <>  
      <div className='goal-card'>
        <h3>{goal.name}</h3> 
        <p>Target: ${goal.targetAmount}  Saved: ${goal.savedAmount}</p>
        <div className='progress-bar' style={{width: `${progress}%`}}></div>
        <p>{daysLeft >=0 ? `${daysLeft} days left` : 'Deadline passed'}</p>
        {isCompleted && <p style={{color: 'green'}}> Goal Completed!</p>}
        {isOverdue &&<p style={{color: 'red'}}>Is OverDue!</p>}
        {isNearDeadline && <p style={{color: 'orange'}}>Deadline Approaching!</p>}
    </div>

    <input
        type='number'
        value={deposit}
        onChange={e => setDeposit(e.target.value)}
        placeholder='Deposit Amount'
    />
    <button onClick={handleDeposit}>Deposit</button>
    <button onClick={() => onDeleteGoal(goal.id)}>Delete</button>
    </>


    
  )
}

export default GoalItem