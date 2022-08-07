import React, { useState, useEffect } from "react";
import styles from "./allAuthors.module.scss";
import { AutorsComponent } from "./Authors";
import Search from "../../Search/Search";

export const AllAuvthors = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://gutendex.com/books/")
      .then((res) => res.json())
      .then((data) => setBooks(data.results));
  }, []);
  return (
    <div  className={styles.authorsStyle}>
      {books.map((item) => (
        <div className={styles.containerAuthors} key={item.id}>
          {item.authors.map((author) => (
            <div>{author.name}</div>
          ))}
        </div>
      ))}
      <Search/>
      <AutorsComponent/>
    </div>
  );
};
