import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import TeacherList from "./TeacherList"
import CourselList from "./CourseList";

describe("List layout",()=>{
    const setupTeacher =()=> render(<TeacherList />)
    const setupcourse =()=> render(<CourselList/>)
    test('teacherpage with a title', () => {
        setupTeacher()
        const title = screen.getByRole('heading');
        expect(title).toBeInTheDocument();
      });
      test('coursepage with a title', () => {
        setupcourse()
        const title = screen.getByRole('heading');
        expect(title).toBeInTheDocument();
      });
      test('se more button',()=>{
        setupTeacher()
        setupcourse()
        const button = screen.getByRole('button',{name:/Click/i})
        expect(button).toBeInTheDocument()
      })

})
describe("List api request",()=>{
    const setupcourse =()=> render(<CourselList/>)
    test("renders a list of item if request is successful",async()=>{
        setupcourse()
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
          json: async () => [{
            "id":"1",
            "coursename":"Frontend Utveckling",
            "coursetime":"3",
            "details":[
                {"date":"12/04-2023"},
                {"description":"Ditan och dattan"}
            ]
        }],
        })
          const courses = await screen.findAllByRole('listitem');
          expect(courses).not.toHaveLength(0)

    })
})

