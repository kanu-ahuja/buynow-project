import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Mainbanner from '../product/mainbanner';
import Addtocart from './addtocart';

const Productdetail = () => {
  const [singledata, setSingledata] = useState({})
  const [notfound,setNotFound] = useState(false)

  let { id } = useParams();
  console.log(id, "===id===");

  useEffect(() => {
    singleuser()
  }, [])

  const singleuser = async () => {
    
  let data = await fetch('https://dummyjson.com/products/'+ id)
  setSingledata(data)
    if(!data?.ok){
      setNotFound(true)
      return;
    }
    data = await data.json()
    setSingledata(data);
  }

  return (
    <div>
      {notfound && (notfound) ? <div className='container'>Not Found!</div> : <Mainbanner item={singledata}/> }
    </div>
  )
}

export default Productdetail
