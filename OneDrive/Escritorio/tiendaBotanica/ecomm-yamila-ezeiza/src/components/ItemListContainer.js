
import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.js";
import products from '../utils/products.js';

const ItemListContainer=() =>{
   const[data,setData]=useState([]);
   const {id}= useParams()
   const customFetch=(products)=>{
    return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(id){
    resolve(products.filter((item)=>item.category==id));
  }else resolve(products);
  },2000);
  });
  }; 
   useEffect(() =>{
    customFetch(products)
    .then((data)=> setData(data))
   },[id]);
 
  
   return (  <>
     <ItemList data={data}/>
      </>
    );
   }
export default ItemListContainer;