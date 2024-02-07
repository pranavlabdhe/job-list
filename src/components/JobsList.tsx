// import React, { useEffect, useState } from 'react'
// import { Job } from '../model'
// import listImagUrl from '../../src/assets/images/list.png'
// import { Scrollbars } from 'react-custom-scrollbars';
// interface Props {
//     jobs:any,
//     setJobsTodo:any
//     wordSearch:any
//     setWordSearch:any
//     word:any;
//     setWord:any
//   }
// const JobsList: React.FC<Props> = ({ jobs,setJobsTodo,word })=> {

//   const rearrangeJobs = (id: number) => {
//     const index = jobs.findIndex((item1: any) => item1.id === id);
//     if (index !== -1) {
//       const removedElement = jobs.splice(index, 1)[0];
//       jobs.push(removedElement);
//     }
//   };

//   const handleToggleDone = (id:number) => {
//       setJobsTodo((prevJobs:any) =>
//       prevJobs.map((job:any) => {
//         return (
//           job.id === id ? { ...job, isDone: !job.isDone } : job 
//         )
//       }
//     )
//   )
//   rearrangeJobs(id);
// }
  
//   const EditText = (id:number) => {

//   }

//   const handleDelete = (id:any) => {
//     let getCurrentIdFromArr = jobs.filter((elem:any)=> elem.id !== id );
//         setJobsTodo(getCurrentIdFromArr)
//   }
  
//   useEffect(()=>{
//     console.log(word)
//   },[word])


//   return (

//         <div>
//     <div className='jobs_main_div col-12'>
//       <div className='col-12  d-flex align-items-center flex-column col_6_div'>
//         <div className='col-12 col-sm-8 col-md-9 col-lg-6'>
//       <Scrollbars className='job_box col-12 col-sm-6 col-md-6 col-lg-6 p-4' style={{ width:'100%' , height:'',padding:'8px' }}>
//       <div className='' style={{padding:'16px'}}>
//       { jobs.length === 0  ?
//         <div className='font_class mt-5'>
//           <img src= {listImagUrl} className='' alt='list_image' />
//           <h2>Your List will come up here</h2>
//       </div>
//       :
//       <>
//         {jobs.filter((item:any)=> {
//             return word.toLowerCase() === '' ? item : item.job.toLowerCase().includes(word.toLowerCase())
//         }).map(({id, job, isDone}:Job)=>{
//             return (
//               <div className='d-flex mt-3'>
//               <div className='col-11 col-sm-11 col-md-11 col-lg-11 d-flex align-items-center  gx-5 justify-space-between col_class1' key={id}>
//                   <div className='col-6 text-center'>
//                     {isDone ? <p className='mb-2 job_text_line_through'>{job}</p> :<p className='mb-2 job_text'>{job}</p> }
//                   </div>
//                   <div className='col-6 text-end '> 
//                  <div className='actions'>
//                   {
//                     !isDone ? 
//                     <>
//                       <i className='fas fa-edit edit-icon ic mt-1'
//                           onClick={()=>EditText(id)}></i> 
//                       <i className='fas fa-check-circle ic mt-1'
//                           onClick={()=>handleToggleDone(id)}></i> 
                        
//                     </>
               
//                  : <i className='fas fa-undo ic mt-1'
//                  onClick={()=>handleToggleDone(id)}
//                  ></i>
//                  }
//                  <i className='fas fa-trash-alt mt-1 ic' onClick={()=>handleDelete(id)}></i>             
//                   {isDone ? <p className='status_1 statusw me-3'>Done</p> : <p className='me-3 status_2'>Not Done</p>}
//                   </div>
//                   </div>
//               </div>
//               </div>
//             )
//         })}
//         </>
//       }
//       </div>
     
//       </Scrollbars>
//       </div>
//         </div>
//   </div>
//   <div>
//   <p className="cpy">Version: 1.0.0 </p>
//   <p className="cpy">Copyright © 2024 Pranav Labdhe</p>
//   </div>
//   </div>
 
  
//   )
// }
// // onclick of undo show tick and change isDone to false
// export default JobsList
import React, { useEffect, useState } from 'react'
import { Job } from '../model'
import listImagUrl from '../../src/assets/images/list.png'
import { Scrollbars } from 'react-custom-scrollbars';

interface Props {
  jobs: Job[],
  setJobsTodo: React.Dispatch<React.SetStateAction<Job[]>>,
  wordSearch: any,
  setWordSearch: React.Dispatch<React.SetStateAction<any>>,
  word: any;
  setWord: React.Dispatch<React.SetStateAction<any>>
}

const JobsList: React.FC<Props> = ({ jobs, setJobsTodo, word }) => {
  const [editId, setEditId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState<string>('');

  const rearrangeJobs = (id: number) => {
    const index = jobs.findIndex((item: Job) => item.id === id);
    if (index !== -1) {
      const removedElement = jobs.splice(index, 1)[0];
      jobs.push(removedElement);
    }
  };

  const handleToggleDone = (id: number) => {
    setJobsTodo(prevJobs =>
      prevJobs.map(job =>
        job.id === id ? { ...job, isDone: !job.isDone } : job
      )
    );
    rearrangeJobs(id);
  };

  const handleEdit = () => {
    if (editId !== null && editValue.trim() !== '') {
      setJobsTodo(prevJobs =>
        prevJobs.map(job =>
          job.id === editId ? { ...job, job: editValue } : job
        )
      );
      setEditId(null);
      setEditValue('');
    }
  };

  const handleDelete = (id: number) => {
    const updatedJobs = jobs.filter(elem => elem.id !== id);
    setJobsTodo(updatedJobs);
  };

  useEffect(() => {
    console.log(word);
  }, [word]);

  return (
    <div>
      <div className='jobs_main_div col-12'>
        <div className='col-12 d-flex align-items-center flex-column col_6_div'>
          <div className='col-12 col-sm-8 col-md-9 col-lg-6'>
            <Scrollbars className='job_box col-12 col-sm-6 col-md-6 col-lg-6 p-4' style={{ width: '100%', height: '', padding: '8px' }}>
              <div className='' style={{ padding: '16px' }}>
                {jobs.length === 0 ?
                  <div className='font_class mt-5'>
                    <img src={listImagUrl} className='' alt='list_image' />
                    <h2>Your List will come up here</h2>
                  </div>
                  :
                  <>
                    {jobs.filter((item: Job) => {
                      return word.toLowerCase() === '' ? item : item.job.toLowerCase().includes(word.toLowerCase())
                    }).map(({ id, job, isDone }: Job) => (
                      <div className='d-flex mt-3' key={id}>
                        <div className='col-11 col-sm-11 col-md-11 col-lg-11 d-flex align-items-center gx-5 justify-space-between col_class1'>
                          {editId === id ? (
                            <>
                              <input
                                type="text"
                                value={editValue}
                                className='form-control mb-3'
                                onChange={(e) => setEditValue(e.target.value)}
                              />
                              <button className='btn btn-primary ms-3 mb-3' onClick={handleEdit}>Save</button>
                              <button className='btn btn-primary ms-2 mb-3' onClick={() => setEditId(null)}>Cancel</button>
                            </>
                          ) : (
                            <>
                              <div className='col-6 text-center'>
                                {isDone ? <p className='mb-2 job_text_line_through'>{job}</p> : <p className='mb-2 job_text'>{job}</p>}
                              </div>
                              <div className='col-6 text-end '>
                                <div className='actions'>
                                  {!isDone ? (
                                    <>
                                      <i className='fas fa-edit edit-icon ic mt-1'
                                        onClick={() => setEditId(id)}></i>
                                      <i className='fas fa-check-circle ic mt-1'
                                        onClick={() => handleToggleDone(id)}></i>
                                    </>
                                  ) : (
                                    <i className='fas fa-undo ic mt-1'
                                      onClick={() => handleToggleDone(id)}
                                    ></i>
                                  )}
                                  <i className='fas fa-trash-alt mt-1 ic' onClick={() => handleDelete(id)}></i>
                                  {isDone ? <p className='status_1 statusw me-3'>Done</p> : <p className='me-3 status_2'>Not Done</p>}
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </>
                }
              </div>
            </Scrollbars>
          </div>
        </div>
      </div>
      <div>
        <p className="cpy">Version: 1.0.0 </p>
        <p className="cpy">Copyright © 2024 Pranav Labdhe</p>
      </div>
    </div>
  );
};

export default JobsList;
