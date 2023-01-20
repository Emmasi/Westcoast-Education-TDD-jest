import "../layout/style/Style.css";
import React from "react";
import { useState, useEffect } from "react";

const AddKurs = () => {
  const [addCourseNum,setaddCourseNum] = useState(" ")
  const [addCourseTitle,setaddCourseTitle] = useState(" ")
  const [addCourseTime,setaddCourseTime] = useState(" ")
  const [addCourseDes,setaddCourseDes] = useState(" ")
  const [addCourseDate,setaddCourseDate] = useState(" ")
  const [addList,setaddList]=useState([])


  return (
        <section className="container">
          <h2 className="page-title">Lägga till kurs</h2>
          <form className="form-control">
          <h3>Kursuppgifter</h3>
            <label htmlFor="Kursnummer">Kursnummer </label>
            <input type="text" id="Kursnummer" value={addCourseNum} onChange={(e)=>{setaddCourseNum(e.target.value)}}/>
            <label htmlFor="Kurstitle">Kurstitel</label>
            <input type="text" id="Kurstitle" value={addCourseTitle} onChange={(e)=>{setaddCourseTitle(e.target.value)}}/>
            <label htmlFor="Kurstime">Längd </label>
            <input type="number" id="Kurstime" value={addCourseTime} onChange={(e)=>{setaddCourseTime(e.target.value)}}/>
            <label htmlFor="Kursdecsribe">Beskrivning </label>
            <input type="text" id="Kursdecsribe" value={addCourseDes} onChange={(e)=>{setaddCourseDes(e.target.value)}}/>
            <label htmlFor="Startdatum">Startdatum </label>
            <input type="date" id="Startdatum" value={addCourseDate} onChange={(e)=>{setaddCourseDate(e.target.value)}}/>
            <button>Spara</button>
          </form>
        </section>
  );
};
export default AddKurs;
