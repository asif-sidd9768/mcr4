import { CardBtns } from "../CardBtns/CardBtns"
import "./CommentCard.css"

export const CommentCard = ({postUser,comment, commentId, createdAt, likes, picUrl, username}) => {
  return (
    <div className="comment-container">
      <div className="comment-header">
        <span><img className="comment-icon" src={picUrl} /></span>
        <span className="comment-username">@{username}</span>
        <span className="card-circle"><i className="fa-solid fa-circle"></i></span>
        <span className="card-post-time">1 min</span>
      </div>
      <span className="comment-replying-to">Replying to <span className="card-username">@{postUser}</span></span>
      <p className="comment-content">{comment}</p>
      <CardBtns />
    </div>
  )
}