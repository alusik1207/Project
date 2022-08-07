import React, { useState, useEffect } from "react";

import Search from "../../Search/Search";
import { Route, Link } from "react-router-dom";
import { Reading } from "./reading";

export const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://gutendex.com/books/")
      .then((res) => res.json())
      .then((data) => setBooks(data.results));
  }, []);
  return (
    <div>
      {books.map((item) => (
        <div key={item.id}>
          {item.subjects.map((subjects) => (
            <div>
              <Link to="/reading">{subjects.replace(" -- Fiction", "")}</Link>
            </div>
          ))}
          <Route path="/reading/:id" element={Reading} />
        </div>
      ))}
      <Search />
    </div>
  );
};
