import propTypes from "prop-types";

import { CardItem } from "../CardItem/CardItem";
import { CardList } from "./CardList.styled";

const FollowerList = ({ data }) => {
  return (
    <CardList>
      {data.map((data) => {
        return (
          <CardItem
            key={data.id}
            tweets={data.tweets}
            followers={data.followers}
            avatarUrl={data.avatar}
            name={data.user}
            id={data.id}
          ></CardItem>
        );
      })}
    </CardList>
  );
};

export { FollowerList as CardList };

FollowerList.propTypes = {
  data: propTypes.array.isRequired,
};
