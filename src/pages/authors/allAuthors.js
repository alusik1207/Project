import React, { useState, useEffect } from "react";
import styles from "./allAuthors.module.scss";
import { AutorsComponent } from "./Authors";
import Search from "../../Search/Search";

export const AllAuvthors = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetch(`https://gutendex.com/books/?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => setBooks(data.results));
  }, [currentPage]);
  return (
    <div>
    <div  className={styles.authorsStyle}>
      {books.map((item) => (
        <div className={styles.containerAuthors} key={item.id}>
          {item.authors.map((author) => (
            <div>{author.name}</div>
          ))}
        </div>
      ))}
     
    </div>
    <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      <button onClick={() => setCurrentPage(currentPage - 1)}>Previos</button>
    </div>
  );
};
