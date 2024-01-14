import React, { useEffect, useState } from "react";

interface Props {
  job: string;
  setJobTodo: React.Dispatch<React.SetStateAction<string>>;
  handleJobs:(e:React.FormEvent)=> void;
  hideOverlay: boolean;
  showOverlayFun:()=>void;
  closeOverlayFun:() => void;
  jobs:any;
  setJobsTodo: any;
  wordSearch:any
  setWordSearch:any;
  word:any;
  setWord:any
}
const InputField: React.FC<Props> = ({ job, setJobTodo,handleJobs,hideOverlay,closeOverlayFun,showOverlayFun, jobs, setJobsTodo,wordSearch,setWordSearch,word,setWord }) => {
    // const getJobName = (word:any) => {
    //     setWord(word)
    //             const getJobNameFromArr = wordSearch.filter((o:any)=> {
    //             let jobLower = o.job.toLowerCase();
    //             let wordLower = word.toLowerCase();
    //             if(jobLower === wordLower) {
    //                 return wordSearch;
    //             } 
    //         })
    //         console.log(getJobNameFromArr)
    // }
    
    // console.log("JOBS",jobs)
    // get word search and setJobsToDo to word search else if word field is empty setWordSearch to jobs 
  return (
    <form onSubmit={handleJobs}>
      {hideOverlay ? null : (
        <div className="overlay" onClick={closeOverlayFun}></div>
      )}
      <div className="parent_body">
        <h2 className="title">JOB LIST</h2>
        <input
          type="text"
          className="input_field"
          onClick={showOverlayFun}
          placeholder="Enter job todo"
          value={job}
          onChange={(e)=>setJobTodo(e.target.value)}
        />
         <input
          type="text"
          className="input_field mt-2"
          onClick={showOverlayFun}
          placeholder="Search job"
          value={word}
          onChange={(e)=>setWord(e.target.value)}
        />
        <div className="btn_wrapper">
          <button type="submit"  className="search_btn">ADD JOB</button>
        </div>
    
      </div>
    </form>
  );
};

export default InputField;



