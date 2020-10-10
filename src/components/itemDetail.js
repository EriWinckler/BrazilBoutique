import React, { useState, useEffect } from 'react';

/**
* @author
* @function ItemDetail
**/

const ItemDetail = () => {

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch("https://api.guildwars2.com/v2/commerce/prices?page=1&page_size=200");
    const item = await fetchItem.json();

    console.log(item);
  }
  
  return(
    <div>ItemDetail</div>
   )

 }

export default ItemDetail;