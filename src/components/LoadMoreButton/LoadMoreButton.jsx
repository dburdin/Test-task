import propTypes from "prop-types";

import { LoadMoreButton } from "./LoadMoreButton.styled";

const Button = ({ title, handleLoadMore }) => {
  return <LoadMoreButton onClick={handleLoadMore}>{title}</LoadMoreButton>;
};

export { Button as LoadMoreButton };

Button.propTypes = {
  title: propTypes.string.isRequired,
  handleLoadMore: propTypes.func.isRequired,
};
