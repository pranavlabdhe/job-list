import React, { useEffect, useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import { Job } from './model'
import JobsList from './components/JobsList'
const App:React.FC = () => { 

  const [job,setJobTodo] = useState<string>('')

  const [word , setWord] = useState('')
  const [jobs, setJobsTodo] = useState<Job[]>(()=> {
      // Retrieve jobs from local storage on component mount
      const storedJobs = localStorage.getItem('jobs');
      return storedJobs ? JSON.parse(storedJobs) : [];
  })
  const [wordSearch, setWordSearch] = useState([...jobs])

  const [hideOverlay, setHideOverlay] = useState<boolean>(true);
  // console.log(job);
  
  useEffect(()=> {
    localStorage.setItem('jobs',JSON.stringify(jobs))
  },[jobs])

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

  // console.log(jobs); 
  

  return (
    <>
    <div className='parent_component'>
      <InputField job={job} setJobTodo={setJobTodo} handleJobs={handleJobs} hideOverlay={hideOverlay} showOverlayFun={showOverlayFun} closeOverlayFun={closeOverlayFun} jobs={jobs} setJobsTodo={setJobsTodo} wordSearch={wordSearch} setWordSearch={setWordSearch} word={word} setWord={setWord}/>
      <JobsList jobs={jobs} setJobsTodo={setJobsTodo} wordSearch={wordSearch} setWordSearch={setWordSearch} word={word} setWord={setWord}/>
      </div>
    </>
  )
}

export default App
