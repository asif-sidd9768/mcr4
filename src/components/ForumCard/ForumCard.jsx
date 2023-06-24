
import { useLocation, useNavigate } from "react-router-dom"
import "./ForumCard.css"
import { CommentCard } from "./CommentCard/CommentCard"
import { CardBtns } from "./CardBtns/CardBtns"
import { useContext } from "react"
import { ForumContext } from "../../main"
import { updateDownvotesAction, updateUpvotesAction } from "../../actions/forumActions"
import { calculateTimeDiff } from "../../utils/calculateTimeDiff"

export const ForumCard = ({post,username, createdAt, isBookmarked, tags, postDescription, postId, comments, upvotes, downvotes}) => {
  const { forumDispatch } = useContext(ForumContext)
  const location = useLocation()

  return (
    <div className="forum-card-container">
      <div className="card-header">
        <span className="card-icon"><i className="fa-solid fa-user-secret"></i></span>
        <span className="card-posted-by">Posted by </span> 
        <span className="card-username">@{username}</span>
        <span className="card-circle"><i className="fa-solid fa-circle"></i></span>
        <span className="card-post-time">{calculateTimeDiff(createdAt)}</span>
      </div>
      <h3 className="card-post-title">{post}</h3>
      <div className="card-tags">
      {
        tags.map(tag =>
          <span className="card-tag" key={tag}>{tag}</span>
        )
      }
      </div>
      <p className="card-post-desc">{postDescription}</p>
      <hr className="card-divider" />
      <CardBtns postId={postId} isBookmarked={isBookmarked}/>
      <hr className="card-divider" />
      <div className="card-votes">
        <p onClick={() => forumDispatch(updateUpvotesAction(postId))}><i className="fa-solid fa-thumbs-up vote-icon"></i>Upvote</p>
        <p>{upvotes-downvotes}</p>
        <p onClick={() => forumDispatch(updateDownvotesAction(postId))}><i className="fa-solid fa-thumbs-down vote-icon"></i>Downvote</p>
      </div>
      { location.pathname.includes("forum") && <div className="card-comments">
        {comments.map((comment) => 
          <CommentCard key={comment.commentId} {...{...comment, postUser: username}} />
        )}
      </div>}
    </div>
  )
}

// comments: Array [ {…} ]​​​
// createdAt: "2023-06-24T12:00:00Z"​​​
// downvotes: 50​​​
// isBookmarked: false​​​
// name: "Tanay Pratap"​​​
// picUrl: "http://bit.ly/42Zm7tM"​​​
// post: "Join InvactHQ for MBA"​​​
// postDescription: "Non programmers on my timeline. Attention! After placing 100+ programmers i in top Indian startups, I am thinking of coming up with a program for business roles as well. Interested in helping me build this course? Join me at Invact."​​​
// postId: "36635-787-65778"​​​
// tags: Array(3) [ "mba", "business", "bootcamp" ]​​​
// upvotes: 350​​​
// username: "tanaypratap"