import {BrowserRouter, Route, Routes} from "react-router-dom" 
import Footer from "./components/footer"
import Articles from "./components/articles"
import Navbar from "./components/nav"
import Graphics from "./components/graphics"


const Master = ()=>{
    return (
        <BrowserRouter>
        <Navbar/>
        <Graphics/>
        <Articles/>
        <Footer/>
        </BrowserRouter>
    )
}

export default Master
