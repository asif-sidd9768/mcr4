import { useContext } from "react"
import { ForumContext } from "../../main"
import { ForumCard } from "../ForumCard/ForumCard"

import "./ForumList.css"
import { sortForums } from "../../utils/sortHelper"

export const ForumList = () => {
  const { forumState } = useContext(ForumContext)
  
  const sortedForums = sortForums(forumState?.forumData?.posts, forumState)
  return (
    <div>
      <h3 className="forum-list-title">Latest Posts</h3>
      {
        sortedForums.map(post =>
          <ForumCard key={post.postId} {...post} />
        )
      }
    </div>
  )
}