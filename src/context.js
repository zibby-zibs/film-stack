import React, { useState, useContext, useEffect } from 'react'
import { movies } from '../src/data/db'
import { genre } from '../src/data/db'


const AppContext = React.createContext()


const AppProvider = ({ children }) => {
    const [movie, setMovie] = useState(movies)
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState(genre)
    

return (
    <AppContext.Provider
      value={{
        movie,
        setMovie,
        search,
        setSearch,
        category,
        setCategory,
       
        
      

      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }