import React , { useEffect , useState } from 'react';
import './App.css';
import GoalForm from './Components/GoalForm';
import GoalList from './Components/GoalList';
import Overview from './Components/Overview';
import GoalItem from './Components/GoalItem';

function App() {
  const[  goals , setGoals ] = useState([]);
 // fetching goals on mount
  useEffect(()  => {
        fetch('http://localhost:3000/goals')
        .then(res => res.json())
        .then(data => setGoals(data));
  }, []);
// adding new goal
  const handleAddGoal = (newGoal) => {
    fetch('http://localhost:3000/goals' , {
      method : 'POST',
      headers :{ 'content-Type' : 'application/json'},
      body: JSON.stringify(newGoal)
    })
    .then(res => res.json())
    .then(data => setGoals(prev => [...prev , data]))

  };
 //updating goal
  const handleUpdateGoal = (id , updatedFields) => {
    fetch('http://localhost:3000/goals/${id}' ,{
      method: 'PATCH',
      headers: {'content-Type': 'application/json'},
      body: JSON.stringify(updatedFields)
    })

    .then(res =>res.json())
    .then(updatedGoal => {
      setGoals(prev => prev.map(goal => goal.id === id ? updatedGoal : goal));

    });
  };
 //deleting goal
  const handleDeleteGoal =(id) => {
    fetch('http://localhost:3000/goals/${id}' , {
      method: 'DELETE'
    })
    .then(() => setGoals(prev => prev.filter( goal => goal.id !== id)));
  };




  return (
    <>
       <div className="container">
      <h1>Smart Goal Planner</h1>
      <GoalForm onAddGoal={handleAddGoal}/>
      <Overview goals={goals} />
      <GoalList goals={goals} onUpdateGoal={handleUpdateGoal}
      onDeleteGoal={handleDeleteGoal}
/>        
    </div>
    <div>
      {goals.map((goal) => {
        console.log(`Goal: ${goal.name}`);
        return< GoalItem  key={goal.id} goal={goal}/>;
      })}
    </div>
    </>
 
    
  );
}

export default App;
