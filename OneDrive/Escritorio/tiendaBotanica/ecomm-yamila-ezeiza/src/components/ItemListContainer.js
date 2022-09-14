import React,{ useEffect, useState } from "react";
import ItemList from "./ItemList.js";
import products from '../utils/products.js';

const ItemListContainer=({greeting}) =>{
   const[data,setData]=useState([]);
  const customFetch=(products)=>{
    return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(products);
  },2000);
  });
  }; 
  
  useEffect(() =>{
    customFetch(products)
    .then((data)=> setData(data))
   },[]);
 
   return (  <>
     {greeting}
     <ItemList data={data}/>
      </>
    );
  }
export default ItemListContainer;