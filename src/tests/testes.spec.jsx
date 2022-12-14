import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App"
import LoginForm from "../Components/LoginForm";

describe("Testes do checkpoint II do Front III", () =>{
    describe("App", () => {
        it("deverá renderizar sem erro", () => {
            render(<App/>)
        })
    })

    describe("Login", ()=>{
        it("devera renderizar dois inputs",()=>{
            render(<LoginForm/>)
            const inputs = screen.getAllByRole("textbox")
            expect(inputs.length).toBeGreaterThan(1)
        })
    })
})