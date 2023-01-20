import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import AddKurs from "./AddKurs"

describe("Register kurs Component",()=>{
    const setup =()=> render(<AddKurs/>)
    test("has a kursnummer Input",()=>{
        setup()
        const kursnumInput = screen.getByLabelText("Kursnummer")
        expect(kursnumInput).toBeInTheDocument()

    })
    test("has a kurstitle Input",()=>{
        setup()
        const kurstitleInput = screen.getByLabelText("Kurstitel")
        expect(kurstitleInput).toBeInTheDocument()

    })
    test("has a time Input",()=>{
        setup()
        const kurstimeInput = screen.getByLabelText("Längd")
        expect(kurstimeInput).toBeInTheDocument()

    })
    test("has a describe Input",()=>{
        setup()
        const kursdecInput = screen.getByLabelText("Beskrivning")
        expect(kursdecInput).toBeInTheDocument()

    })
    test("has a startdate Input",()=>{
        setup()
        const kursstartdateInput = screen.getByLabelText("Startdatum")
        expect(kursstartdateInput).toBeInTheDocument()

    })
})
