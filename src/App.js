import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student from "./components/layout/Student";
import AddKurs from "./components/addkurs/AddKurs";
import AddTeacher from "./components/addteacher/AddTeacher";
import Login from "./components/login/Login";
import CourseList from "./components/lista/CourseList";
import TeacherList from "./components/lista/TeacherList";
import Nav from "./components/layout/Navigation";

function App() {

  return (
    <BrowserRouter>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/Addkurs" element={<AddKurs />} />
          <Route path="/AddTeacher" element={<AddTeacher />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CourseList" element={<CourseList />} />
          <Route path="/TeacherList" element={<TeacherList />} />
        </Routes>
      </main>
      <footer className="footercontainer"></footer>
    </BrowserRouter>
  );
}

export default App;
