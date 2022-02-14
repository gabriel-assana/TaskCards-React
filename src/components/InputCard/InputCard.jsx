import './InputCard.css';

import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import Card from '../Card/Card';

function InputCard() {

    const [taskCurrent, setTaskCurrent] = useState('');

    
    return (
      <div className="container-add-task">
          <input className="input-task" 
                 type="text" 
                 placeholder='digite sua nova tarefa'
                 value={taskCurrent}
                 onChange={value => setTaskCurrent(value.target.value)}
          />
          <button className="btn-add" onClick={()=> addNewtask()}><FaPlus/></button>
      </div>
    );

   function addNewtask(event){
    
      <Card/>
      console.log(event)
    
   }




}



  
  export default InputCard; 