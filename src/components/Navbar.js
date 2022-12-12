import React from "react";
import { useGlobalContext } from "../context";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const{ search, setSearch, movie, setMovie, } = useGlobalContext();
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
   
       
    return ( 
        <form onSubmit={handleSubmit}>
            <label htmlFor="search-box">
                <input
                    type="search" 
                    name="search-box"
                    className="search-box"
                    id="search-box"
                    value={search}
                    icon = "search"
                    onChange={(e)=>setSearch(e.target.value)}
                    onFocus= {()=>navigate("/search")}
                />
                
            </label>
        </form>
     );
}
 
export default Navbar;