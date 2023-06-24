
import { useContext } from "react"
import "./SideBar.css"
import { ForumContext } from "../../main"

export const SideBar = () => {
  const {forumState} = useContext(ForumContext)
  return (
    <div className="sidebar-container">
      <div>
        <button className="sidebar-item"><i className="fa-solid fa-house sidebar-icon"></i>Home</button>
        <button className="sidebar-item"><i className="fa-solid fa-rocket sidebar-icon"></i>Explore</button>
        <button className="sidebar-item"><i className="fa-solid fa-bookmark sidebar-icon"></i>Bookmarks</button>
        <button className="sidebar-item"><i className="fa-solid fa-user sidebar-icon"></i>Profile</button>
      </div>
      <div  className="sidebar-profile">
        <p className="sidebar-profile-icon"><i className="fa-solid fa-user-secret"></i></p>
        <p className="sidebar-name">{forumState?.forumData?.name}</p>
        <p className="sidebar-username">@{forumState?.forumData?.username}</p>
      </div>
    </div>
  )
}