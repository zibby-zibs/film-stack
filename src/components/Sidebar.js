import React from "react";
import { BiBookmark, BiGridAlt, BiMovie, BiLayer } from 'react-icons/bi'
import { Link } from "react-router-dom";
import { genre }  from '../data/db'

const Sidebar = () => {
    return ( 
        <main className="container-side">
            <section className="category-icons">
                <Link to="/">
                    <BiMovie style={{color: "#F21D44"}}/>
                </Link>
               
                <Link to="/recommended">
                    <BiLayer  className="icon-style"/>
                </Link>

                <Link to="/category">
                    <BiGridAlt  className="icon-style"/>
                </Link>

               
            </section>
        </main>
     );
}
 
export default Sidebar;