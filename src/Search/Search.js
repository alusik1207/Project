import React, { useState, useEffect } from 'react';
import styles from './Search.module.scss'

const Users = () => {
  const URL = 'https://gutendex.com/books/';
  const [users, setUsers] = useState([]);
  const [renderUser, setRenderUser] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  },[])

 

  const onChangeHandler = (event) => {
    setInput(event.target.value);

    const newUsers = users.filter((user) =>
      user.title.toLowerCase().includes(input.toLowerCase())
    );

    setRenderUser(newUsers);
  };

  return (
    <div>
      <input type="text" onChange={onChangeHandler} value={input} placeholder='Search...' className={styles.searching}/>
      <div>
        {input &&
          renderUser.map((user) => {
            return <div key={user.id}>{user.title}</div>;
          })}
      </div>
    </div>
  );
};

export default Users;