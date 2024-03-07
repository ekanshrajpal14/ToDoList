"use client"

import React, { useContext } from 'react'
import style from '@/app/done/done.module.css'
import { Centralizeddata } from '../contextapi'
const page = () => {
const [Donetask,setDonetask] =   useContext(Centralizeddata);
  let dataDone = <div className={style.task}><p>No task has been done yet</p></div> ;
if(Donetask !=0){

  dataDone = Donetask.map((item,index)=>{
    return(
      <div key={index} className={style.task}>
        <p>{item.listdata}</p>
      </div>
    )
  })
  
}
console.log(Donetask);
  return (
    <>
    <div className={style.done}>
        <div className={style.allTask}>
          {dataDone}
            {/* <div className={style.task}></div> */}
        </div>
    </div>
    </>
  )
}

export default page