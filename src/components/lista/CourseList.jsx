import { useState, } from "react";
import Info from '../info/course'
import '../layout/style/Style.css'
import {FetchData} from "../../api/api";

const CourselLista = () => {
  const courseList = FetchData('http://localhost:3010/kurser')
  console.log(courseList)
  const [InfoBtn, setInfoBtn] = useState(false)
  return (
        <section className="listcontainer">
          <h2 className="page-title">Alla Kurser</h2>
          <ul>
        {courseList?.map((item) =>{
          return(
          <li key={item.id}><strong>{item.coursename} </strong>
          {InfoBtn && <Info item={item}/>}</li>)}
        )}
      </ul>
      <button className="showMoreBtn" onClick={()=>{ setInfoBtn(!InfoBtn)}}> Clika här för mer info om varje kurs!</button>    
        </section>
  );
};
export default CourselLista;
