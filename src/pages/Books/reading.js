import React, { useState, useEffect } from "react";


export const Reading = () => {
  const [booksReading, setBooksReading] = useState([]);
  useEffect(() => {
    fetch("https://gutendex.com/books/")
      .then((res) => res.json())
      .then((data) => setBooksReading(data.results));
  }, []);
  return (
    <div>
      {booksReading.map((item) => (
        <div key={item.id}>
          {item.formats.map((formats) => (
            <div>{formats}</div>
          ))}
        </div>
      ))}
      </div>
)};
