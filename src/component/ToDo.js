import React from "react";
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiTick} from 'react-icons/ti'

export default function ToDo({ToDos, completeTask, removeTask}) {

    return ToDos.map((ToDo,index) => (
        <div className = {ToDo.isComplete ? 'complete Task-div' : 'Task-div'} key={index} >

        <div className="ToDo-text">{ToDo.text} </div>
        <div className="icons" key={ToDo.id}> 
        <TiTick className={ToDo.isComplete ? 'hide' : 'tick'} onClick={() => {completeTask(ToDo.id)}}></TiTick>
        <RiCloseCircleLine className='cross' onClick={() => {removeTask(ToDo.id)}}></RiCloseCircleLine>
        </div>
    </div>

    ))
}
