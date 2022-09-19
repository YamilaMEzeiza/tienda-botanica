import React,{ useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.js";
import products from '../utils/products.js';
import { useParams } from "react-router-dom";

const ItemDetailContainer=() =>{
    const[data,setData]=useState({});
    const {id}= useParams();
    const customFetch=(products)=>{
      return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(id){
      resolve(products.find((item)=>item.id==id));
    }else resolve(products);
    },2000);
    });
    }; 
     useEffect(() =>{
      customFetch(products)
      .then((data)=> setData(data))
     },[id]);
  
    return (  <>
    
      <ItemDetail product={data}/>
       </>
     );
   }
 export default ItemDetailContainer;