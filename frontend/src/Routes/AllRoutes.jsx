

import { Route, Routes } from "react-router-dom"

// import Story from "../Pages/Story"
import LogIn from "../Pages/LogIn"
import SignUp from "../Pages/SignUp"
import Dashboard from "../Pages/Dashboard"
import Vehicles from "../Pages/Vehicles"
import Vendors from "../Pages/Vendor"
import Product from "../Pages/Products"
import Home from "../Pages/HomePage"



export const AllRoutes=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/vehicles" element={<Vehicles/>}/>
                <Route path="/vendors" element={<Vendors/>}/>
                <Route path="/products" element={<Product/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                
            </Routes>
        </div>
    )
}