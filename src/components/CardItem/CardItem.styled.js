import styled from "styled-components";

import backgoundImage from "../../img/backgound.png";

export const CardItem = styled.li`
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const UpperCardPart = styled.div`
  width: 100%;
  height: 50%;
  position: relative;

  background-image: url(${backgoundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
`;

export const LowerCardPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50%;
`;

export const MiddleCardPart = styled.div`
  width: 100%;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const CardAvatar = styled.div`
  position: relative;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;

  background-color: #ebd8ff;

  border-radius: 50%;

  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const BackgroundCircle = styled.div`
  width: 62px;
  height: 62px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 50px;
  border: none;
`;

export const CardAvatarImage = styled.img`
  width: 62px;
  border-radius: 50%;
`;

export const LogoImg = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const CardInfo = styled.p`
  :not(:last-of-type) {
    margin-top: 26px;
    margin-bottom: 16px;
  }
  color: #ebd8ff;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 1.2;
`;

export const CardButton = styled.button`
  width: 196px;
  height: 50px;

  padding: 5px;
  margin-top: 26px;

  ${({ isFollowing }) =>
    !isFollowing ? `background-color: #ebd8ff;` : `background-color: #5cd3a8;`};

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;

  font-weight: 600;
  font-size: 18px;
  color: #373737;
  text-transform: uppercase;

  transition-property: background-color, box-shadow, transform;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  :hover {
    background-color: ${({ isFollowing }) =>
      isFollowing ? "RGBA(236, 217, 221, 0.8)" : "#5cd3a8"};
  }

  :active {
    box-shadow: none;
    transform: scale(0.99);
  }
`;
