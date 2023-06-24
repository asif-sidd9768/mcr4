
import { ForumFilter } from "../../components/ForumFilter/ForumFilter"
import { ForumList } from "../../components/ForumList/ForumList"
import "./ForumPage.css"

export const ForumPage = () => {
  return (
    <div className="forum-page-container">
      <ForumList />
      <ForumFilter />
    </div>
  )
}