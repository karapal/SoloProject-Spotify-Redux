
import React from "react";
import {useState } from "react";
import Songs from "./Songs";



  const Mainpage = () => {
    const [songs, setSongs] = useState([]);
    React.useEffect(() => {
      fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=linkin park")
        .then((res) => res.json())
        .then((json) => {
          setSongs(json.data);
        })
        .catch((err) => {
          console.warn(err);
          alert("Error");
        });
        
    }, []);
    return (
        <>
          
          <main className="body">
        <section className="main-displa-area">
          <div className="container-fluid">
            <h2 id="morning-header" className="mt-4">
              Good Morning
            </h2>
          </div>
        </section>
        <div className="container-fluid song-list">
          <div className="col-sm-12 recently-played">
            <h4>Recently played</h4>
            <div
              className="row row-cols-1 row-cols-md-3 row-cols-lg-5 gy-2 mt-4"
              id="recently"
            >
              {}
              {songs?.slice(0, 10).map((songObj) => {
                return <Songs key={songObj.id} songs={songObj} />;
              })}
            </div>
          </div>
        </div>
        <div className="col-sm-12 shows">
          <h4>Shows to try</h4>
          <h6>Podcasts we think you'll get hooked on</h6>
          <div
            className="row row-cols-1 row-cols-md-3 row-cols-lg-5 gy-2 mt-4"
            id="shows"
          >
            {}
            {songs?.slice(0, 10).map((songObj) => {
              return <Songs key={songObj.id} songs={songObj} />;
            })}
          </div>
        </div>
      </main>
    </>
    
          
       
      );
    };
    export default Mainpage;