import React, { useState } from "react";

interface Props {
  job: string;
  setJobTodo: React.Dispatch<React.SetStateAction<string>>;
  handleJobs:(e:React.FormEvent)=> void;
  hideOverlay: boolean;
  showOverlayFun:()=>void;
  closeOverlayFun:() => void;
}
const InputField: React.FC<Props> = ({ job, setJobTodo,handleJobs,hideOverlay,closeOverlayFun,showOverlayFun }) => {



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
        <div className="btn_wrapper">
          <button type="submit"  className="search_btn">ADD JOB</button>
        </div>
        <p>jhdscghcs</p>
      </div>
    </form>
  );
};

export default InputField;
