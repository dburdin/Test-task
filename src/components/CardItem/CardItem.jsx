import { useState } from "react";

import {
  CardItem,
  UpperCardPart,
  LowerCardPart,
  LogoImg,
  CardInfo,
  CardButton,
  MiddleCardPart,
  CardAvatar,
  BackgroundCircle,
  CardAvatarImage,
} from "./CardItem.styled";

import logo from "../../img/svg/Logo.svg";

const FollowerItem = ({ tweets, followers, avatarUrl, name, id }) => {
  const [isFollowing, setIsFollowing] = useState(() =>
    JSON.parse(localStorage.getItem(`isFollowing_${id}`))
  );
  const [followerCount, setFollowerCount] = useState(
    () => JSON.parse(localStorage.getItem(`followerCount_${id}`)) || followers
  );

  const handleFollow = () => {
    const updatedFollowerCount = !isFollowing
      ? followerCount + 1
      : followerCount - 1;

    setIsFollowing(!isFollowing);
    setFollowerCount(updatedFollowerCount);

    if (!isFollowing) {
      localStorage.setItem(`isFollowing_${id}`, JSON.stringify(!isFollowing));
      localStorage.setItem(
        `followerCount_${id}`,
        JSON.stringify(updatedFollowerCount)
      );
    } else {
      localStorage.removeItem(`isFollowing_${id}`);
      localStorage.removeItem(`followerCount_${id}`);
    }
  };

  return (
    <CardItem>
      <UpperCardPart>
        <LogoImg src={logo} alt="GoIT-logo" />
      </UpperCardPart>
      <MiddleCardPart>
        <CardAvatar>
          <BackgroundCircle>
            <CardAvatarImage src={avatarUrl} alt={name}></CardAvatarImage>
          </BackgroundCircle>
        </CardAvatar>
      </MiddleCardPart>
      <LowerCardPart>
        <CardInfo> {tweets} Tweets</CardInfo>
        <CardInfo> {followerCount.toLocaleString()} Followers</CardInfo>
        <CardButton
          type="button"
          onClick={handleFollow}
          isFollowing={isFollowing}
        >
          {isFollowing ? "Following" : "Follow"}
        </CardButton>
      </LowerCardPart>
    </CardItem>
  );
};

export { FollowerItem as CardItem };
