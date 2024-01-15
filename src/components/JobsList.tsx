import React, { useEffect, useState } from 'react'
import { Job } from '../model'
interface Props {
    jobs:any,
    setJobsTodo:any
    wordSearch:any
    setWordSearch:any
    word:any;
    setWord:any
  }
const JobsList: React.FC<Props> = ({ jobs,setJobsTodo,word })=> {

  const handleToggleDone = (id:number) => {
      setJobsTodo((prevJobs:any) =>
      prevJobs.map((job:any) =>
      job.id === id ? { ...job, isDone: !job.isDone } : job
    )
  )

}

  const handleDelete = (id:any) => {
    let getCurrentIdFromArr = jobs.filter((elem:any)=> elem.id !== id );
        setJobsTodo(getCurrentIdFromArr)
  }
  
  useEffect(()=>{
    console.log(word)
  },[word])


  return (
    <div>
    <div className='jobs_main_div col-12'>
      <div className='col-12 d-flex align-items-center flex-column col_6_div'>
      <h2 className='font_class'>Jobs to do</h2>
        {jobs.filter((item:any)=> {
            return word.toLowerCase() === '' ? item : item.job.toLowerCase().includes(word.toLowerCase())
        }).map(({id, job, isDone}:Job)=>{
            return (
              <div className='col-10 col-sm-6 col-md-6 col-lg-6 d-flex align-items-center gx-5 justify-space-between col_class1' key={id}>
                  <div className='col-6 text-center'>
                    {isDone ? <p className='mb-2 job_text_line_through'>{job}</p> :<p className='mb-2 job_text'>{job}</p> }
                  </div>
                  <div className='col-6 text-end '> 
                 <div className='actions'>
                  {
                    !isDone ? 
                 <i className='fas fa-check-circle ic mt-1'
                 onClick={()=>handleToggleDone(id)}
                 ></i> : <i className='fas fa-undo ic mt-1'
                 onClick={()=>handleToggleDone(id)}
                 ></i>
                 }
                 <i className='fas fa-trash-alt mt-1 ic' onClick={()=>handleDelete(id)}></i>             
                  {isDone ? <p className='status_1 me-3'>Done</p> : <p className='me-3 status_2'>Not Done</p>}
                  </div>
                  </div>
              </div>
            )
        })}
        </div>
        <div>

        </div>
  </div>
  </div>
  )
}
// onclick of undo show tick and change isDone to false
export default JobsList