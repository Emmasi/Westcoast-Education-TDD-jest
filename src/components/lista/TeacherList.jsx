import Info from "../info/teacher";
import { useState, } from "react";
import '../layout/style/Style.css'
import {FetchData} from "../../api/api";

const TeacherList = () => {
  const teacherList = FetchData('http://localhost:3010/teacher')
  console.log(teacherList)
  const [InfoBtn, setInfoBtn] = useState(false)
  return (
    <section className="listcontainer">
      <h2 className="page-title">Alla Lärare</h2>
      <ul>
        {teacherList?.map((item) => {
          return(
            <li key={item.id}>
            <strong>{item.name}</strong> {item.kurs}
            {InfoBtn && <Info item={item} />}
          </li>
          )
        }

        )}
      </ul>
      <button className="showMoreBtn"onClick={() => {setInfoBtn(!InfoBtn);}}>Clicka här för att ser mer om varje kurs!</button>
    </section>
  );
};
export default TeacherList;
