
import { useContext } from "react"
import "./ForumFilter.css"
import { ForumContext } from "../../main"
import { toggleSortAction } from "../../actions/forumActions"

export const ForumFilter = () => {
  const {forumDispatch} = useContext(ForumContext)
  const handleSortFilter = (event) => {
    forumDispatch(toggleSortAction(event.target.value))
  }
  return (
    <div className="filter-container">
      <select className="filter-selector" onChange={handleSortFilter}>
        <option value={true}>Latest Posts</option>
        <option value={false}>Trending Posts</option>
      </select>
    </div>
  )
}