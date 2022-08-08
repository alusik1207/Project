import React, { useState, useEffect } from 'react';

import Search from '../../Search/Search';
import { Route, Link } from 'react-router-dom';
import { Reading } from './reading';

export const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('https://gutendex.com/books/')
      .then((res) => res.json())
      .then((data) => setBooks(data.results));
  }, []);
  return (
    <div>
      {books.map((item) => (
        <div key={item.id}>
          {/* {item.subjects.map((subjects, index) => (
            <div key={index}>
              <Link to={`/reading/${item.id}`}>
                {subjects.replace(' -- Fiction', '')}
              </Link>
            </div>
          ))} */}
          <Link to={`/reading/${item.id}`}>{item.title}</Link>
        </div>
      ))}
      <Search />
    </div>
  );
};
