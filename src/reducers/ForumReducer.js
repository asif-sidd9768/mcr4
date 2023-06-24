import { FORUM_DATA } from "../db/forumData";

export const initialState = {
  forumData: FORUM_DATA,
  isLatest: true
}

export const forumReducer = (state, action) => {
  switch(action.type){
    case "FORUM_UPVOTE": {
      const updatedForumsAfterUp = state.forumData.posts.map(post => post.postId === action.payload ? {...post, upvotes: post.upvotes+1} : post)
      return {...state, forumData: {...state.forumData, posts: updatedForumsAfterUp}}
    }
    case "FORUM_DOWNVOTE": {
      const updatedForumsAfterDown = state.forumData.posts.map(post => post.postId === action.payload ? {...post, downvotes: post.downvotes+1} : post)
      return {...state, forumData: {...state.forumData, posts: updatedForumsAfterDown}}
    }
    case "BOOKMARK_POST":{
      const updatedForumsAfterDown = state.forumData.posts.map(post => post.postId === action.payload ? {...post, isBookmarked: !post.isBookmarked} : post)
      return {...state, forumData: {...state.forumData, posts: updatedForumsAfterDown}}
    }
    case "TOGGLE_SORT":
      return {...state, isLatest: action.payload}
    default: 
      return {...state}
  }
}