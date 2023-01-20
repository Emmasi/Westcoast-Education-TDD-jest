import {Link} from 'react-router-dom'
import React from 'react'

const Nav = () => {

  return (
    <nav className="navbar">
      <h1 className="page-title-lg"><Link to="/">Westcoast Education</Link></h1>
      <ul>
      <li><Link to="/CourseList" >Se alla kurser</Link></li>
      <li><Link to="/TeacherList" >Se alla lärare</Link></li>
      <li><Link to="/AddTeacher">Lägg till lärare </Link></li>
      <li><Link to="/Addkurs">Lägg till kurser</Link></li>
      <li><Link to="/Login">Logga in</Link></li>
      </ul>
    </nav>
  );
};
export default Nav;
