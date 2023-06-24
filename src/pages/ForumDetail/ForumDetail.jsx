import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ForumContext } from "../../main"
import { ForumCard } from "../../components/ForumCard/ForumCard"

import "./ForumDetail.css"

export const ForumDetail = () => {
  const {forumState} = useContext(ForumContext)
  const {forumId} = useParams()
  const navigate = useNavigate()
  const foundForum = forumState?.forumData?.posts?.find(({postId}) => postId === forumId)
  return (
    <div>
      <h3 className="forum-list-title">
        <span onClick={() => navigate(-1)} className="back-arrow-btn"><i className="fa-solid fa-arrow-left"></i></span>
        Posts
      </h3>
    
      <div className="detail-container">
        <ForumCard {...foundForum} />
        <div></div>
      </div>
    </div>
  )
}