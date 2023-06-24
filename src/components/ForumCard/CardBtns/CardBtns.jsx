import { useLocation, useNavigate } from "react-router-dom"

import { useContext } from "react"
import { ForumContext } from "../../../main"
import { bookmarkPostAction } from "../../../actions/forumActions"

import "./CardBtns.css"

export const CardBtns = ({postId, isBookmarked}) => {
  const {forumDispatch} = useContext(ForumContext)
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className="card-btns-container">
      <button className="card-btn"><i className="fa-regular fa-message"></i></button>
      <button className="card-btn" onClick={() => location.pathname.includes("forum") ? null : navigate(`/forum/${postId}`)}><i className="fa-regular fa-share-from-square"></i></button>
      <button className={`card-btn ${isBookmarked && "bookmarked"}`} onClick={() => forumDispatch(bookmarkPostAction(postId))}><i className="fa-solid fa-bookmark"></i></button>
    </div>
  )
}