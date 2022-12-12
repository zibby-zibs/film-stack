import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Recommended from "./Recommended";
import Search from "./Search";
import Trending from "./Trending";
import { useGlobalContext } from "../context";
import Category from "./Category";
import { genre } from "../data/db";
const Home = () => {
    
    const allCategories = genre.map((category, i)=> {
        return <div key={i}>{category}</div>
    })

    return (
        <main className="container-home">
            <Navbar />
           
            <section>
                <Routes>  
                    <Route path="/" element={<Trending /> }/>
                    <Route path="/recommended" element={<Recommended /> }/>
                    <Route path="/search" element={<Search />}/>
                    
                    <Route path="/category" element={<Category categories={allCategories} />} />
                </Routes>
            </section>
                </main>
            );
}   
 
export default Home;