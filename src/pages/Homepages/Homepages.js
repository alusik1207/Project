import React,{useEffect,useState} from 'react'
import styles from './Homepages.module.scss'
import { v4 as uuidv4 } from 'uuid';
import {randomcolor} from 'randomcolor'

function Homepages() {
  const [item, setItem]=useState('')
  const [items,setItems]=useState(
    JSON.parse(localStorage.getItem('items')) || []
  )
  useEffect( ()=>{
    localStorage.setItem('items', JSON.stringify(items))
  },[items]);

  const newItem = () => {
    if (item.trim!=='') {
      // const newItem = {
      //   id:uuidv4(),
      //   item:item,
      //   color:randomcolor({
      //     count: 10,
      //     hue: 'brown'
      //   }),
      //   defaultPos: {
      //     x: -100,
      //     y: -100,
      //   }
      // };

      // setItems( (items) => [...items, newItem]),

    } else {
      alert('Write something...')
      setItem('')
    }
  }


  return (
    <div ><h1>Imagination</h1>
    <p>Discussion</p>
    <div className={styles.reviewBlock}>
    <input type='texterea' placeholder='Write a review' className={styles.review} onChange={(e)=>setItem(e.target.value)}/> 
    </div>
      <button onClick={newItem}>Add a comment</button>
      <div>{
        items.map((item, index)=>{
          <div key={index}>{`${item.item}`}</div>
        })
        }</div>
    </div>
    
  )
}
export default Homepages