
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
//import { useState } from "react"
import { useTheme } from "./hooks/useTheme";

function App() {
  
  const { theme } = useTheme()

  return (

    
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}

      <div className={`.navBarLink ${theme}`}>
        <Navbar />
        <main>
          <Outlet />          
        </main>
        <Footer />
      </div>
      
    </>
     
    
  );
}

export default App;
