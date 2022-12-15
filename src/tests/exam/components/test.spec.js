import { render, screen } from "../../test-utils"
import Login from '../../../Routes/Login';
import App from "../../../App";
import LoginForm from "../../../Components/LoginForm";

test('should show login form', () => {
  render(<Login />)
  expect(screen.getByText('Login')).toBeInTheDocument();
});

// describe("Testes do checkpoint II do Front III", () =>{
//     describe("App", () => {
//         it("deverá renderizar sem erro", () => {
//             render(<App/>)
//         })
//     })

//     describe("Login", ()=>{
//         it("devera renderizar dois inputs",()=>{
//             render(<LoginForm/>)
//             const inputs = screen.getAllByRole("textbox")
//             expect(inputs.length).toBeGreaterThan(1)
//         })
//     })
// })