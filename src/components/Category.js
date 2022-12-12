import React, { useState, useEffect } from 'react';
import { genre } from '../data/db';
import { useGlobalContext } from '../context';
import ReactPaginate from 'react-paginate';
import Grid from 'dynamic-react-grid'

const Category = () => {
    const { movie, setMovie } = useGlobalContext();
    const itemsPerPage = 6;
    const [itemOffset, setItemOffset] = useState(0)
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)


    


  useEffect(()=>{
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(movie.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(movie.length / itemsPerPage));
  },  [itemOffset, setItemOffset, movie])
 
  


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % movie.length;
    setItemOffset(newOffset);
  };

  return (
    <>
         <main>
             <h1 style={{color: "#F29F05",  marginTop: "10px"}}> 
                All the movies we have  
            </h1>
            <section>
              <Grid row className="all-movies-container">
                {movie.map((movie)=>{
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
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName='page-num'
        previousLinkClassName='page-num'
        nextLinkClassName='page-num'
        activeLinkClassName='active'
      />
    </>
  );
}
 
export default Category;