

import React, { useEffect , useState} from 'react'
import History from './Components/History'
import MyContext from './MyContext/Mycontext';

const App = () => {
  const [todo,setTodo]=useState([{
    todoName:"meditaion",
    todoDescription:"EveryDay morning 5'o clock",
    status:"Not Completed"
  },{
    todoName:"Excercise",
    todoDescription:"EveryDay morning 6'o clock",
     status:"Not Completed"
  },
  {
    todoName:"Study",
    todoDescription:"EveryDay morning 7'o clock",
    status:"Not Completed"
  },
  {
    todoName:"Coding",
    todoDescription:"EveryDay morning 8'o clock",
    status:"Not Completed"
  },
  {
    todoName:"Sleep",
    todoDescription:"EveryDay morning 9'o clock",
    status:"Completed"
  },
  {
    todoName:"Repeat",
    todoDescription:"EveryDay morning 10'o clock",
    status:"Not Completed"
  }
]);
//const navigate=useNavigate();
 useEffect(()=>{
  console.log("component mounted");
  //navigate("/history");

  },[])
  const [addTodo, setAddTodo]=useState({
    todoName:'',
    todoDescription:'',
    status:"Not Completed"

  });

  const handleChange=(event)=>{
    const {name, value}=event.target;
    setAddTodo({...addTodo,[name]:value})
  }

  const addTodos=()=>{
  
    setTodo([...todo, addTodo]);
    setAddTodo({
      todoName:'',
      todoDescription:'',
      status:"Not Completed"
    })
  
  }

  const editFunc=(index,changeStatus, task)=>{
    const newTodo=[...todo];
    newTodo[index].status=changeStatus;
    newTodo[index].todoName=task.todoName;
    newTodo[index].todoDescription=task.todoDescription;
    setTodo(newTodo);
  }

 const deleteFunc=(passIndex)=>{
     
      
      const delTodo=todo.filter((value,index)=>{
       
          if(index!== passIndex){
           let {...delTodo}=value;
            // console.log(delTodo);
            
               return delTodo;
                
          }
        }
       
        
      )
      console.log(delTodo);
      setTodo(delTodo);

 }


  return (
      <MyContext.Provider value={{todo, setTodo}}>
    <div className='m-5'>
    <div className='d-flex flex-wrap justify-content-center  align-items-center'  >
<div className='col'><input type="text" className='m-4' value={addTodo.todoName} name="todoName" onChange={handleChange} placeholder='Todo Name' /></div>
<div className='col'><input type="text" className='m-4' value={addTodo.todoDescription} name="todoDescription" onChange={handleChange} placeholder='Todo Description'/></div>
<div className='col'><button className='btn btn-primary m-4' type='submit' onClick={addTodos} >Add todo</button></div>
</div>


<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4  ">
         
           {todo.map((value, index,todo)=>(
             <div className=' col' key={index}>
              <History  index={index} key={index} value={value} editFunc={editFunc} deleteFunc={deleteFunc}/>
              </div>
           ))}
            
           
    
      
    </div>
    </div>
    </MyContext.Provider>
    
  )
}

export default App