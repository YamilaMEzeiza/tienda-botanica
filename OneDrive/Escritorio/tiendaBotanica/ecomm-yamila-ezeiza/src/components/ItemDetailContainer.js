import React,{ useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.js";
import products from '../utils/products.js';

const ItemDetailContainer=() =>{
    const[data,setData]=useState({});
   const customFetch=(products)=>{
     return new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve(products);
   },2000);
   });
   }; 
   
   useEffect(() =>{
     customFetch(products[4])
     .then((data)=> setData(data))
    },[]);
  
    return (  <>
    
      <ItemDetail product={data}/>
       </>
     );
   }
 export default ItemDetailContainer;