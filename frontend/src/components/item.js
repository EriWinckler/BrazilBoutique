import React, { useState, useEffect } from "react";

/**
 * @author
 * @function Item
 **/

const Objeto = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [data, setData] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://api.guildwars2.com/v2/mounts/types/griffon"
    ).then((response) => response.json());

    
    console.log(data);
    setData(data);
  };

  return (
    <div>
      {
      data
        ? (
        <div>
          <h1 key={data.id}>{data.name}</h1>
          <h3>{data.default_skin}</h3> 
        </div>
        )
        : "Loading..."
      }
    </div>
  );
};

export default Objeto;
