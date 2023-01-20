import { useEffect,useState } from "react";


const FetchData =(url)=>{
    const [alldata,setalldata]= useState( null)
    const fetchfunction =(url)=>{
    fetch(url)
          .then((response) => response.json())
          .then((data) => setalldata(data))
          .catch((e) => {console.error(e)})
    }
    useEffect(() => {
      const fetchAllData = async (url)=>{
        const alldata = await fetchfunction(url)
        setalldata(alldata); 
      };
      fetchAllData(url)
    },[]);
      return alldata;   
}
export {FetchData}