import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import Login from "./Login"

describe("Register user Component",()=>{
    const setup =()=> render(<Login />)
    test("has a name Input",()=>{
        setup()
        const nameInput = screen.getByPlaceholderText("User name")
        expect(nameInput).toBeInTheDocument()
    })
})