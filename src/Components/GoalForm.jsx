import React , { useState} from 'react'

function GoalForm ({ onAddGoal}) {
    const[formData , setFormData ] = useState({
        name: '',
        targetAmount: '',
        savedAmount: 0,
        category: '',
        deadline: ''
    });

function handleChange(event){
    const{name , value} = event.target;
    setFormData(prevData => ({
        ...prevData , [name] : value,
    }));
}

function handleSubmit(event){
    event.preventDefault();
    const newGoal = {
        ...formData,
        targetAmount: Number(formData.targetAmount),
        savedAmount: Number(formData.savedAmount)
    };
    onAddGoal(newGoal);

    setFormData({
        name: '',
        targetAmount: '',
        savedAmount:0,
        category:'',
        deadline:''   
     });

};

return(
    <>
    <form onSubmit={handleSubmit}>
        <h2>Add New Goal</h2>
        <input name="name" value={formData.name} onChange={handleChange} placeholder='Goal Name' required/>
        <input name='targetAmount' value={formData.targetAmount} onChange={handleChange} placeholder='Target Amount' type='number' required/>
        <input name='category' value={formData.category} onChange={handleChange} placeholder='Category' required/>
        <input name='deadline' value={formData.deadline} onChange={handleChange} type='date' required/>
        <button type='submit'>Add Goal</button>

    </form>
    </>
);

}


export default GoalForm