import React, { useEffect, useState } from "react";
import { instance } from "../../api";

export const AutorsComponent = () => {
  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    const response = await instance.get("/results");
    console.log(response.data);
  };
  
  const [autors, setAutors] = useState([]);
  

const ascSort = () => {
  const sortedAurors = autors.sort((a, b) =>
    a.name > b.name ? 1 : a.name < b.name ? -1 : 0
  );

  setAutors([...sortedAurors]);
};

const descSort = () => {
  const sortedAurors = autors.sort((a, b) =>
    a.name > b.name ? -1 : a.name < b.name ? 1 : 0
  );

  setAutors([...sortedAurors]);
};

return (
  <div>
    <button onClick={ascSort}>A-Z</button>
    <button onClick={descSort}>Z-A</button>
    {autors.map((item) => (
        <div key={item.id}>
          {item.authors.map((author) => (
            <div>{author.name}</div>
          ))}
          </div>
    ))}
  </div>
    )}

    