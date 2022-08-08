import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reading = () => {
  const [booksReading, setBooksReading] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://gutendex.com/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBooksReading(data));
  }, [id]);

  return <div style={{ marginTop: '100px' }}>{booksReading.title}</div>;
};
