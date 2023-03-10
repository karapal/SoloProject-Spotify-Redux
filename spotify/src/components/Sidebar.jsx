
import {
  Spotify,
  House,
  Search,
  Bookmark,
} from "react-bootstrap-icons";


const Sidebar = () => {
  
  return (
    <div className="navbar-custom d-none d-lg-block d-xl-block d-xxl-block">
      <ul className="navbar-nav">
        <li className="nav-item my-3">
          <div className="text-light heading d-flex align-items-center justify-content-flex-start mt-3">
            <div className="d-flex align-items-center ">
              <div className=" mx-3 me-2">
                <Spotify color="white" size={45} />
              </div>
              <div>Spotify</div>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
          >
            <House color="white" size={20} />
            <div className="w-75 d-flex">
                Home
            </div>
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
          >
            <Search color="white" size={20} />

            <div className="w-75 d-flex">
             
                Search{" "}
              
            </div>
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
          >
            <Bookmark color="white" size={20} />
            <div className="w-75 d-flex">Your Library</div>
          </button>
        </li>
        <li className="nav-item margin-top">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              class="bi bi-plus-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
            </svg>
            <div className="w-75 d-flex">Create Playlist</div>
          </button>
        </li>
      </ul>
      <div className="allplaylists mt-2">
      <ul>
          <li class="nav-item-playlists">Funky Heavy Bluesy</li>
          <li class="nav-item-playlists">Your Top Songs 2020</li>
          <li class="nav-item-playlists">In Love With You</li>
          <li class="nav-item-playlists">This is Rod Steward</li>
          <li class="nav-item-playlists">FRANCHISE ft Young Thug</li>
          <li class="nav-item-playlists">Your Top Songs 2019</li>
          <li class="nav-item-playlists">Pallegio</li>
          <li class="nav-item-playlists">This Joe Bonamassa</li>
          <li class="nav-item-playlists">Jun 19</li>
          <li class="nav-item-playlists">Jack 30th Party 2<i class="fa-solid fa-user-group"></i></li>
          <li class="nav-item-playlists">Jack 30th Party<i class="fa-solid fa-user-group"></i></li>
          <li class="nav-item-playlists">This is Opeth</li>
          <li class="nav-item-playlists">Metal Ballads</li>
          <li class="nav-item-playlists">New Playlist </li>
          <li class="nav-item-playlists">Your Top Songs 2018</li>
          <li class="nav-item-playlists">Jazz Classics Blue Note</li>
        </ul>
      </div>
      <div>
        <div className="d-flex align-items-center    mt-4 m-3 download">
          
        </div>
      </div>
    </div>
  );
};
export default Sidebar;