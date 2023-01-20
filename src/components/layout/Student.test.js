import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import Student from "./Student";

describe("start/student side layout",()=>{
    test("welcome heading",()=>{
        render(<Student />)
        const title = screen.getByRole("heading",{name:'Välkommen'})
        expect(title).toBeInTheDocument()
    })
    test("finding like button",()=>{
        render(<Student/>)
        const likebtn = screen.getByRole("button",{name:/Like/i})
        expect(likebtn).toBeInTheDocument();
    })

})
