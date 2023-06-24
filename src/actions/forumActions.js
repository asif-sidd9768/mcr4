export const updateUpvotesAction = (forumId) => ({
  type:"FORUM_UPVOTE",
  payload: forumId
})

export const updateDownvotesAction = (forumId) => ({
  type:"FORUM_DOWNVOTE",
  payload: forumId
})

export const toggleSortAction = (type) => ({
  type:"TOGGLE_SORT",
  payload:type
})

export const bookmarkPostAction = (forumId) => ({
  type:"BOOKMARK_POST",
  payload: forumId
})