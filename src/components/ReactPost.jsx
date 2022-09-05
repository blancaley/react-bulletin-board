import PostLiked from "./PostLiked";
import { useState } from "react";

const ReactPost = ({ question, answer }) => {
  const [ postLiked, setPostLiked ] = useState(false);

  const likePost = () => {
    setPostLiked(true);
  }

  return (
    <div className="post">
      <h2>{question}</h2>
      <p>{answer}</p>

      {/* Hide the Like button when clicked */}
      {!postLiked && <button className="like-btn" onClick={()=>likePost()}>Like</button>}

      {/* Show message */}
      {postLiked && <PostLiked/>}   
    </div>
  );
}
 
export default ReactPost;