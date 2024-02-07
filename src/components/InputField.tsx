import React, { useEffect, useState } from "react";
import toDoImg from '../assets/images/to-do-list.png'
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

    const newList = () => {
        setJobsTodo([])
    }
    useEffect(()=> {
        localStorage.clear()
    },[newList])
  return (
    <form onSubmit={handleJobs}>
      {/* {hideOverlay ? null : (
        <div className="overlay" onClick={closeOverlayFun}></div>
      )} */}

        <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
            <div>
            <h2 className="title">JOB LIST <img src={toDoImg} alt="todo_image" /></h2>
            </div>
        <div>
            <button type="button" className="btn btn-light" onClick={newList}>
                <span className="make_new_list_text"> Make New List</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 384 512" className="make_new_list"><path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg></button>
        </div>
        </div>
       
       
        <input
          type="text"
          className="input_field mt-3 col-12 col-sm-12 col-md-12 col-lg-12 form-control custom-focus-color"
          onClick={showOverlayFun}
          placeholder="Enter job todo"
          value={job}
          onChange={(e)=>setJobTodo(e.target.value)}
        />
         <input
          type="text"
          className="input_field mt-2 col-12 col-sm-12 col-md-12 col-lg-12 form-control custom-focus-color "
          placeholder="Search job"
          value={word}
          onChange={(e)=>setWord(e.target.value)}
        />
        <div className="btn_wrapper col-12 col-sm-12 col-md-12 col-lg-12 ">
          <button type="submit"  className="search_btn">ADD JOB</button>
        </div>
    

    </form>
  );
};

export default InputField;



