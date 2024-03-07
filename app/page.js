"use client";

import { useRef, useState } from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications';


import styles from '@/app/style.module.css'
import Create from '@/component/Create';
import Show from '@/component/Show';



const page = () => {

  const [id, setid] = useState(null);
  const [data, setdata] = useState([]);
  const [status, setstatus] = useState(false)
  const [listdata, setlistdata] = useState("")

  //     const {data,setdata,id,setid, setlistdata,listdata,updateList,removeList} = props;

  // function onchna(e) {
  //   setlistdata(e.target.value);
  //   console.log(e.target.value);

  // }
  // function submitData(e) {

  //   e.preventDefault();
  //   if (listdata.trim() == "") {
  //     alert("ache se daal bhai")
  //     return;
  //   }
  //   setdata([...data, { listdata,status}]);
  //   setlistdata("");
  // }
  // console.log(data);
  // console.log(Donetask);

  // let ShowData = <div className={styles.listitem}>No data here</div>;
  
  // function updateStatus(id){
  //   NotificationManager.success('Moving this completed task to "Done task" section', 'Task Done !!');
  //   let copyData = [...data];
  //   copyData[id].status=true;
  //   setdata(copyData);
  //   setTimeout(()=>{
  //     let copyNewData = [...data];
  //     let findOut = copyNewData.filter((data,index)=> index===id);
  //     let arr = [...Donetask,...findOut];
  //     setDonetask(arr);
  //     removeList(id);

  //   },1000)  
      
  // }


  // if (data.length > 0) {
  //   ShowData = data.map((item, index) => {
  //     return (<div ref={listDataDone} key={index} className={styles.listitem}>
  //       <div  className={styles.wrapup}>{item.status ? (<div className={styles.Done}><i className="ri-checkbox-line"></i></div>) :
  //         (<div onClick={() => updateStatus(index)} className={styles.Done}><i className="ri-checkbox-blank-line"></i></div>)}<p >{item.listdata}</p></div>
  //       <div className={styles.allSpan} > {id === null ? (<span onClick={() => updateList(index)}>✏️</span>) :
  //         id === index ? ("") : (<span onClick={() => updateList(index)}>✏️</span>)}
  //         <span onClick={() => { removeList(index) }}>❌</span>

  //       </div>
  //     </div>)
  //   })
  // }





  // function updateList(id) {
  //   setid(id);
  //   setlistdata(data[id].listdata);

  // }
  // function removeList(id) {
  //   let fil = data.filter((el, i) => id !== i);
  //   setdata(fil);

  // }
  // function updateData() {
  //   let copyData = [...data];

  //   if (listdata.trim() == "") {
  //     setdata(data);
  //     setid(null)
  //     setlistdata("")
  //     alert("ache se daal bhai");
  //     return;
  //   }


  //   copyData[id].listdata = listdata;
  //   setdata(copyData);
  //   setid(null);
  //   setlistdata("");
  // }
  return (
    <>

      <div className={styles.main}>
        <div className={styles.landing}>

          <div className={styles.centered}>
            <h1 className={styles.welcome}>
              Create Your To do List
            </h1>
            <Create listdata={listdata} setlistdata={setlistdata} id={id} setid={setid} data={data} setdata={setdata}  />
            {/* <form className={styles.form}>
              <input type="text" className={styles.input} onChange={onchna} value={listdata} placeholder="Task" />

              {id !== null ? (<button type='button' className={styles.btn} onClick={updateData}>Update your list</button>) : (<button type='button' className={styles.btn} onClick={submitData}>Add to List</button>)}

            </form> */}
          </div>
          {/* <div className={styles.show}>
            <div className={styles.list}>
              {ShowData}
            </div>
          </div> */}
          <Show listdata={listdata} setlistdata={setlistdata} id={id} setid={setid} data={data} setdata={setdata}  />
        </div>
      </div>



<NotificationContainer/>









      <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
    </>
  )
}

export default page