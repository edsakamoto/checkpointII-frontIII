import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: 'segunda-aula',
          element: <SegundaAula />
        },
        {
          path: 'terceira-aula',
          element: <TerceiraAula />
        },
      ]
    }
  ])

  return (
    <ThemeProvider>
    <LanguageProvider>
    <AcessibilidadeProvider>
    <RouterProvider router={appRouter} />
    </AcessibilidadeProvider>
    </LanguageProvider>
    </ThemeProvider>
  )
}
export default App

// {/* //Na linha seguinte deverá ser feito um teste se a aplicação
//         // está em dark mode e deverá utilizar a classe dark ou light */}
//     <div className={`app light}`}>
//     <Navbar />
//     <main>
//       <Outlet />
//     </main>
//     <Footer />
//     </div>