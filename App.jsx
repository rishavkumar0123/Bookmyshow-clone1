import { BrowserRouter, Routes } from "react-router-dom"
import Header from "./components/Header"
function App(){
  return(
    <>
    <BrowserRouter>
    <Header/>

    <Routes>
      <Route path="/" element={<Home/>}>
      <Route path="/movies" element={<Movies/>} />
     </Routes> 

    </BrowserRouter>
    </>
  )
}
export default App
