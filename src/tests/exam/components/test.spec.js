import { render, screen } from "../../test-utils"
import Login from '../../../Routes/Login';
import Home from "../../../Routes/Home";
import Detail from "../../../Routes/Detail";
import ScheduleForm from "../../../Components/ScheduleForm";

test('Teste 1 - Verifica se está renderizando a tela de login corretamente', () => {
  render(<Login />)
  expect(screen.getByText('Login')).toBeInTheDocument();
});

test('Teste 2 - Verifica se está renderizando a tela do Home', () =>{
  render(<Home/>)
  expect(screen.getByText('Home')).toBeInTheDocument();
})

test('Teste 3 - Verifica se está renderizando a tela do card detalhado corretamente', () => {
  render(<Detail />)
  expect(screen.getByRole('heading',{level: 1})).toBeInTheDocument(); //procura pelo h1
  expect(screen.getByRole('button')).toBeInTheDocument(); //procura pelo botao
})

test('Teste 4 - Verifica se possui os 2 inputs, um de login e outro de password',() =>{
  render(<Login />)
  expect(screen.getByPlaceholderText('Login')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
})

test('Teste 5 - Verifica se o modal para marcar consulta é renderizado',() =>{
  render(<ScheduleForm />)
  expect(screen.getByText('Dentist')).toBeInTheDocument()
  expect(screen.getByText('Patient')).toBeInTheDocument()
  expect(screen.getByText('Schedule')).toBeInTheDocument()
})