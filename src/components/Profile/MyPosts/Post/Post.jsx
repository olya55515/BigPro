import React from "react";
import s from './Post.module.css';

const Post = (props) => {

  return (


    <div className={s.item}>
      <img src="https://cdn.totallythebomb.com/wp-content/uploads/2022/03/ukraine-street-artist-feature.png" />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>

    



  )
}
export default Post;
