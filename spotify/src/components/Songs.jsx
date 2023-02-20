const Songs = (props) => {
    return (
      <>
        <div className="col mb-4">
          <div className="card px-3 py-3 song-card">
            <img
              className="song-img card-img-top"
              src={props.songs.album.cover}
              alt="..."
            />
            <div className="card-body px-0">
              
                <p className="card-text">{props.songs.title}</p>
             
            </div>
            <div id="{list.preview}" className="play-button-outer">
              <div
                className="play-button"
                id="{list.preview}"
              ></div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Songs;