import React from "react";
import { useStore } from "easy-peasy";

export const LikesAndComments = () => {
  const likesAndComments = useStore(
    state => state.data.likes + state.data.numComments
  );

  return <div>number of likes and comments: {likesAndComments}</div>;
};