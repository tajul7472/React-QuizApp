import React from 'react'
import Video from './Video'
import classes from "../styles/Videos.module.css";
import { Link } from 'react-router-dom';
import UseVideoList from '../Hooks/UseVideoList';

const Videos = () => {
  const { loading, error, videos } = UseVideoList();
  return (
    <div className={classes.videos}>
      {videos.length  > 0 &&
        videos.map((video) => (
          <Link to="/quiz" key={video.youtubeID}>
            <Video
              title={video.title}
              id={video.youtubeID}
              noq={video.noq}
              key={video.youtubeID}
            />
          </Link>
        ))}
      {!loading && videos.length  === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}



    </div>
  )
}

export default Videos