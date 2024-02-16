import React from 'react'
import axios from 'axios'
import  { useEffect, useState } from 'react';
import  './Countries.css'

const CountriesSearch = () => {
  const [data,setData] = useState([])
  const [searchData,setSearchData] = useState('')
  async  function apiCall(){
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/all`);
        console.log(response.data)
        setData(response.data)
        
    } catch (e) {
        console.log(e)
    }
        
   }
  useEffect(()=>{
    apiCall()

},[])
  return (
    <>
    <div style={{margin:'0 auto'}}>

    <input type="text" style={{textAlign:'center'}} placeholder='search for countries...' value={searchData} onChange={(e)=>setSearchData(e.target.value)}/>
    </div>
    <div style={{display:'flex', flexWrap:'wrap', gap:'25px', fontWeight:'bold'}}>
        {   data
        .filter((val)=>{
            // console.log(val);
            if(searchData === ''){
                return val;
            }else if(val.name.common.toLowerCase().includes(searchData.toLowerCase())){
                return val;

            }
        })
            .map((val,id)=>(
                <div key={id} className='countryCard' >
                    <img src={val.flags.png} alt="country-flag" style={{width: '100%',height:'120px',objectFit:'cover',overflow:'hidden'}} />
                    <p style={{textAlign:'center',width:'100%', height:'50px'}}>{val.name.common}</p>
                </div>
            ))
        }

        
       
    </div>
    </>
        
  )
}

export default CountriesSearch