import React from "react";
import { useState } from "react";
import PortalModal from "../../portal/PortalModal";
import "../layout/style/modalStyle.css";

const AddTeacher = () => {
  const [openPortal, setopenPortal] = useState(false);

  return (
    <section className="modalcontainer">
        <h2 className="page-title">Lägg till lärare</h2>
        <form className="form-control">
          <h3>Personuppgifter</h3>
          <label htmlFor="Förnamn">Förnamn</label>
          <input id="Förnamn" />
          <label htmlFor="Efternamn">Efternamn</label>
          <input id="Efternamn" />
          <label htmlFor="Personnummer">Personnummer</label>
          <input id="Personnummer" />
          <label htmlFor="E-Post">E-Post</label>
          <input id="E-Post" />
          <label htmlFor="Mobilnummer">Mobilnummer</label>
          <input id="Mobilnummer" />
          <h3>Kompetensområden</h3>
          <input type="checkbox" />
          <label htmlFor="">Frontend Utveckling</label>
          <input type="checkbox" />
          <label htmlFor="">React</label>
          <input type="checkbox" />
          <label htmlFor="">.Net Utveckling</label>
          <input type="checkbox" />
          <label htmlFor="">JavaScript Utveckling</label>
          <input type="checkbox" />
          <label htmlFor="">TypeScript Utveckling</label>
          <input type="checkbox" />
          <label htmlFor="">Java Utveckling</label>
        </form>
        <button onClick={() => setopenPortal(true)}>Spara</button>
          <div>
        <PortalModal
          message="VIRUS"
          secendmessage="Din dator har blivit utsatt för en virus attack!"
          isOpen={openPortal}
          onClose={() => setopenPortal(false)}
        />
      </div>
    </section>
  );

};
export default AddTeacher;
