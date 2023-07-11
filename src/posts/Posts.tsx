import { Navigation } from "../navigation/Navigation";
import "./posts.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../appStore/post/store";
import { PostElem } from "../postelem/PostElem";
import { useEffect } from "react";
import { fetchPosts } from "../appStore/post/postSlice";

export const Posts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const result = posts.map((obj) => <PostElem post={obj} />);
  return (
    <div className="Posts">
      <header>
        <Navigation />
      </header>
      <main>{result}</main>
    </div>
  );
};
