import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'


export const AboutPage = () => {
  const [booksPage, setBooksPage] = useState({});
  const {id}=useParams()
  

  useEffect(() => {
    fetch(`https://gutendex.com/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBooksPage(data));
  }, [id]);


  return (
    <div>

      <div>
        
          <div style={{marginTop:'200px'}}>
            {booksPage.title }
            <div>
              <img src={booksPage.formats && booksPage.formats["image/jpeg"]} alt="book cover" />
            </div>
            <div key={booksPage.id}>
           
            <div>{booksPage.authors?.map((item)=>{
              return <p>{item.name}</p>})}</div>
        
            </div>

            <button>
              <a href={booksPage.formats && booksPage.formats["text/html"]}>Read now</a>
            </button>
          </div>
       
      </div>

    </div>
  );
};
