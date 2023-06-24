import { createContext, useReducer } from "react";
import { forumReducer, initialState } from "../reducers/ForumReducer";

export const ForumContext = createContext()
export const ForumProvider = ({children}) => {
  const [forumState, forumDispatch] = useReducer(forumReducer, initialState)
  return (
    <ForumContext.Provider value={{forumState, forumDispatch}}>
      {children}
    </ForumContext.Provider>
  )
}