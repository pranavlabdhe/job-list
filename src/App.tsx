import React, { useRef, useState } from 'react'
import './App.css'
import { log } from 'console'
import InputField from './components/InputField'
import { Job } from './model'
import JobsList from './components/JobsList'
const App:React.FC = () => { 

  const [job,setJobTodo] = useState<string>('')

  const [jobs, setJobsTodo] = useState<Job[]>([])

  const [hideOverlay, setHideOverlay] = useState<boolean>(true);
  // console.log(job);

  const handleJobs = (e:React.FormEvent) => {
    e.preventDefault()
    if(job) {
        setJobsTodo([...jobs,
          { id:Date.now(), job:job, isDone:false }])
          setJobTodo('')
          setHideOverlay(true)
    }   
  }
  // to showOverlay
  const showOverlayFun = () => {
    setHideOverlay(false);
  };
    // to hideOverlay
  const closeOverlayFun = () => {
    setHideOverlay(true);
  };

  console.log(jobs); 
  

  return (
    <>
      <InputField job={job} setJobTodo={setJobTodo} handleJobs={handleJobs} hideOverlay={hideOverlay} showOverlayFun={showOverlayFun} closeOverlayFun={closeOverlayFun}/>
      <JobsList />
    </>
  )
}

export default App
