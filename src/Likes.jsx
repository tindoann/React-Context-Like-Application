import React, { useRef } from "react";
import { useStore } from "easy-peasy";

export const Likes = React.memo(() => {
  const likes = useStore(state => state.data.likes);
  const renders = useRef(0);
  return (
    <div>
      <div>number of likes: {likes}</div>
      <div>Likes component renders: {renders.current++}</div>
    </div>
  );
});

