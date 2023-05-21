import { LoadMoreButton } from "./LoadMoreButton.styled";

const Button = ({ title, handleLoadMore }) => {
  return <LoadMoreButton onClick={handleLoadMore}>{title}</LoadMoreButton>;
};

export { Button as LoadMoreButton };
