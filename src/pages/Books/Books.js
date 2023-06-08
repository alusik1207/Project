import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../../Search/Search";
import styles from "./Book.module.scss";

export const Books = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://gutendex.com/books/?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => setBooks(data.results));
  }, [currentPage]);

  console.log(currentPage);

  return (
    <div>
      <div className={styles.searchInput}>
        
        <Search />
      </div>
      <div className={styles.bookStyle}>
        {books.map((item) => (
          <div key={item.id} className={styles.containerBook}>
            <h2>{item.title}</h2>
            <div>
              <img src={item.formats["image/jpeg"]} alt="book cover" />
            </div>

            <button className={styles.buttonRead}>
              <a href={item.formats["text/html"]}>Read now</a>
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      <button onClick={() => setCurrentPage(currentPage - 1)}>Previos</button>
    </div>
  );
};
