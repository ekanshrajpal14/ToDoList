"use client"
import React ,{useContext, useRef } from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import styles from '@/app/style.module.css'
import { Centralizeddata } from '@/app/contextapi';

const Show = (props) => {
  const [Donetask,setDonetask] = useContext(Centralizeddata);

  const listDataDone = useRef();
  const { data, setdata, id, setid, setlistdata, listdata, status} = props;

  let ShowData = <div className={styles.listitem}>No data here</div>;

  function updateStatus(id) {
    NotificationManager.success('Moving this completed task to "Done task" section', 'Task Done !!');
    let copyData = [...data];
    copyData[id].status = true;
    setdata(copyData);
    setTimeout(() => {
      let copyNewData = [...data];
      let findOut = copyNewData.filter((data, index) => index === id);
      let arr = [...Donetask, ...findOut];
      setDonetask(arr);
      removeList(id);

    }, 1000)

  }


  if (data.length > 0) {
    ShowData = data.map((item, index) => {
      return (<div ref={listDataDone} key={index} className={styles.listitem}>
        <div className={styles.wrapup}>{item.status ? (<div className={styles.Done}><i className="ri-checkbox-line"></i></div>) :
          (<div onClick={() => updateStatus(index)} className={styles.Done}><i className="ri-checkbox-blank-line"></i></div>)}<p >{item.listdata}</p></div>
        <div className={styles.allSpan} > {id === null ? (<span onClick={() => updateList(index)}>✏️</span>) :
          id === index ? ("") : (<span onClick={() => updateList(index)}>✏️</span>)}
          <span onClick={() => { removeList(index) }}>❌</span>

        </div>
      </div>)
    })
  }

  function updateList(id) {
    setid(id);
    setlistdata(data[id].listdata);

  }
  function removeList(id) {
    let fil = data.filter((el, i) => id !== i);
    setdata(fil);

  }
  return (
    <>

          <div className={styles.show}>
              <div className={styles.list}>
                  {ShowData}
              </div>
          </div>
    </>
  )
}

export default Show