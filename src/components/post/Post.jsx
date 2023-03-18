import "./post.css";
import { MoreVert } from "@mui/icons-material";

export default function Post() {
  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/post/9.jpeg" alt="post" />
            <span className="postUsername">Saif</span>
            <span className="postDate">4th Sept</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Saiful Islam</span>
          <img className="postImg" src="/assets/post/1.jpeg" alt="post" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="likes" />
            <img className="likeIcon" src="assets/heart.png" alt="heart" />
            <span className="postLikeCounter">50 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">20 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
