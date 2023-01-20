import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import AddTeacher from "./AddTeacher"

describe("Register teacher Component",()=>{
    const setup =()=>render(<AddTeacher/>)
    test("has a firstname input",()=>{
        setup()
        const nameInput =screen.getByLabelText('Förnamn')
        expect(nameInput).toBeInTheDocument()

    })
    test("has a lastname input",()=>{
        setup()
        const lastnameInput =screen.getByLabelText('Efternamn')
        expect(lastnameInput).toBeInTheDocument()

    })
    test("has a personalnum input",()=>{
        setup()
        const personalnumInput =screen.getByLabelText('Personnummer')
        expect(personalnumInput).toBeInTheDocument()

    })
    test("has a e-mail input",()=>{
        setup()
        const emailInput =screen.getByLabelText('E-Post')
        expect(emailInput).toBeInTheDocument()

    })
    test("has a mobnum input",()=>{
        setup()
        const mobnumInput =screen.getByLabelText('Mobilnummer')
        expect(mobnumInput).toBeInTheDocument()

    })
    test("has a kursdecsribe input",()=>{
        setup()
        const kursdecInput =screen.getByRole('heading',{name:'Kompetensområden'})
        expect(kursdecInput).toBeInTheDocument()

    })
})