import React, { useState } from 'react';



const History = ({value,index,editFunc, deleteFunc}) => {
  const [click, setClick]=useState(false);
  const [changeStatus,setChangeStatus]=useState("Not Completed");
 
  const toggelFunc=()=>{
      setClick(!click);
      console.log(click)
    }

 
  
  return (
    <div>
         <div className="card mb-2 mt-2" id="cards">
      <div className="card-body">
        <p >Name : {value.todoName}</p>
        <p className='text-wrap-none '>Description : {value.todoDescription}</p>
   
        <div>
     <div className='d-flex  justify-content-evenly'>
    <div>Status :</div>
       <div>
       <div className="dropdown">
  <button className={changeStatus === "Completed" ? "btn btn-success dropdown-toggle " : "btn btn-info dropdown-toggle "} onClick={()=> toggelFunc()}   type="button" data-bs-toggle="dropdown" aria-expanded="false" >
    {changeStatus}
  </button>
 </div>
       </div>
    </div>
    <div>
   {click ? (<div className="card mx-5" style={{width:"10rem"}}>
  
  <ul className="list-group list-group-flush " >
    <li className="btn btn-success" onClick={()=> setChangeStatus("Completed")} >Completed</li>
    <li className="btn btn-danger" onClick={()=> setChangeStatus("Not Completed")}>Not Completed</li>
     </ul>
</div>):null}
    </div>
   </div>



<div className='d-flex flex-wrap justify-content-end p-3'>
  <div className='p-2'><button className='btn btn-warning ' onClick={()=>{editFunc(index,changeStatus);setClick(false)}}>Edit</button></div>
  <div className='p-2'><button className='btn btn-danger '  onClick={()=>deleteFunc(index)}>Delete</button></div>
</div>
         </div>
    </div>
  
    </div>
  
   
    )
}


export default History




// {value.status === "Not Completed" ? "Completed" : "Not Completed"}