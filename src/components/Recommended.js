import { useGlobalContext } from "../context";
import { Link, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Grid from 'dynamic-react-grid';
import { genre } from "../data/db";
import { BiBookBookmark, BiBookmark } from "react-icons/bi";


const Recommended = () => {
    const {movie, setMovie } = useGlobalContext();


    return ( 
        <main>
             <h1 style={{color: "#F29F05",  marginTop: "10px"}}> 
                recommended just for your cool self 
            </h1>
            <section>
              <Grid row className="all-movies-container">
                {movie?.slice(30, 45).map((movie)=>{
                    const { id, title, year, director, actors, posterUrl, plot, runtime, genres } = movie;
                    return (
                      <>
                        <div key={id} className="squeeze">
                            <aside className="book">
                            <img src={posterUrl} alt="" />
                            
                            </aside>
                            <aside className="runtime-title">
                                <h2 style={{color: "#F29F05"}}>{title}</h2>
                                <p style={{fontSize: "15px",marginTop: "5px", color:"#B0B6D9"}}>{`${runtime}mins`}</p>
                            </aside>
                            
                            <div style={{color: "#034873", marginTop: "5px"}}>
                                {
                                    genres.map((item, i)=>{
                                        return (
                                            <span key={i} className="horizontal" style={{ backgroundColor: "#B0B6D9"}}>
                                                {item}
                                            </span>
                                        )
                                    })
                                }
                            </div>
                            <section className="actors-year" style={{marginTop: "10px"}}>
                                <h3>{actors}</h3>
                                <h4>{year}</h4>
                            </section>
                            <section className="details">
                              <h1 style={{color: "#F29F05"}}>{director}</h1>
                              <h3 style={{fontWeight: "200"}}>{plot}</h3>
                            </section>
                        </div>
                        
                     </>
                    )
                })}
              </Grid>
            </section>

        
        </main> 
     );
}
 
export default Recommended;