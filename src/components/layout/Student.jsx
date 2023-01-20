import { useRef, useState, useEffect } from "react";
import TeacherList from "../lista/TeacherList";
import CourselLista from "../lista/CourseList";
const Student = () => {
  const [like, setlike] = useState(0);
  const prevCount = useRef(0);
  useEffect(() => {}, [prevCount, like]);
  return (
    <>
      <div className="hero-start-container">
        <div>
        <h1 className="hero-heading">Välkommen</h1>
        <h2>Till Westcoast Education</h2>
      </div>
      <div>
        <h2>Gilla vår hemsida</h2>
        <div className="like-container">
        <p>{like}</p>
        <button
          className="likeBtn"
          onClick={() => {
            setlike((like) => {
              prevCount.current = like;
              return like + 1;
            });
          }}
        >
          Like
        </button>
        </div>
      </div>
      </div>
      <img
        className="hero-img"
        src="https://images.pexels.com/photos/4143800/pexels-photo-4143800.jpeg"
      />
      <section className="listcontainer">
        <h2 className="page-title-lg">
          Läs mer om våra lärare och våra kurser
        </h2>
        <section className="publikcontainer">
          <TeacherList />
          <CourselLista />
        </section>
        <h2 className="page-title-lg">Registrera dig idag</h2>
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            <form className="loginForm">
              <label htmlFor="chk" aria-hidden="true">
                Sign up
              </label>
              <input
                type="text"
                name="txt"
                placeholder="User name"
                required=""
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
              />
              <button>Sign up</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Student;
