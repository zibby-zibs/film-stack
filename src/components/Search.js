import { useGlobalContext } from "../context";

const Search = () => {

    const {movie, category, setMovie, search, setSearch, filteredResult, setFilteredResult  } = useGlobalContext();
    const genreCat = category.map((cat)=>{
        return cat;
    })


    const filteredData = movie.filter((item)=>{
        return  (
            (item.title.toLowerCase().includes(search.toLowerCase()))
            
        
        )
    });

    return ( 
        <main>
            <h1 style={{color: "#F29F05",  marginTop: "10px"}}>
                Your search result

            </h1>

            {
                search.length > 1 ? filteredData.map((movie)=>{
                  
                        const { id, title, year, director, actors, posterUrl, plot, runtime,genres } = movie;
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
                       
                }) : (
                    <p style={{color: "#F29F05"}}>This is just a demo and only contains movies from a local data</p>
                )
            }
        </main>
     );
}
 
export default Search;