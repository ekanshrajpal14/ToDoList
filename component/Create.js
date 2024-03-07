"use client";
import React,{useRef} from 'react'
import styles from '@/app/style.module.css'

const Create = (props) => {

  const { data, setdata, id, setid, setlistdata, listdata, status } = props;
  

  function onchna(e) {
    setlistdata(e.target.value);
    console.log(e.target.value);

  }
  function submitData(e) {

    e.preventDefault();
    if (listdata.trim() == "") {
      alert("ache se daal bhai")
      return;
    }
    setdata([...data, { listdata, status }]);
    setlistdata("");
  }

  function updateData() {
    let copyData = [...data];

    if (listdata.trim() == "") {
      setdata(data);
      setid(null)
      setlistdata("")
      alert("ache se daal bhai");
      return;
    }


    copyData[id].listdata = listdata;
    setdata(copyData);
    setid(null);
    setlistdata("");
  }


  return (
    <div> <form className={styles.form}>
      <input type="text" className={styles.input} onChange={onchna} value={listdata} placeholder="Task" />

      {id !== null ? (<button type='button' className={styles.btn} onClick={updateData}>Update your list</button>) : (<button type='button' className={styles.btn} onClick={submitData}>Add to List</button>)}

    </form></div>
  )
}

export default Create