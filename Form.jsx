import { useState } from 'react';
import Show from './Show';
function Form() {

    let [Task,SetTask]=useState([]);
    let [Title,setTitle]=useState();
    let [Desc,setDesc]=useState();
    let remove = (index)=>{
      let saved = Task.filter((val,i)=>{
        return index!==i;
      })
      SetTask(saved);
    }
  return (
    <div className='total'>
    <h1>Daily Goals APP</h1>
    <form action="" onSubmit={(e)=>{e.preventDefault();
    setDesc("");
    setTitle("");
    }}>
        <input type="text" placeholder='Enter the Title' className='input' value={Title} onChange={(e)=>{setTitle(e.target.value)}} />
        <textarea name="" id="" placeholder='Enter Description' className='textarea' value={Desc} onChange={(e)=>{setDesc(e.target.value)}}></textarea> 
    <button className='button' onClick={()=>{
    SetTask([...Task,{Title:Title,Desc:Desc}]);
    console.log(Task);
    }}>SUBMIT</button>   
    </form>
    {
    Task.map((item,index)=>(
        <Show Title={item.Title} Descrip={item.Desc} index={index} remove={remove} />
    ))}
    </div>
  )

}

export default Form;
