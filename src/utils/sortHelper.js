export const sortForums = (forumsList, forumState) => {
  return [...forumsList].sort((a, b) => {
    if (!forumState?.isLatest) {
      return a.upvotes - b.upvotes;
    } else {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });
};
