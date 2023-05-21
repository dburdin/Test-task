import styled from "styled-components";

export const LoadMoreButton = styled.button`
  width: 196px;
  height: 50px;

  margin: 0 auto;

  padding: 5px;
  margin-top: 26px;

  background-color: #ebd8ff;
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

  :hover,
  :focus {
    background-color: #5cd3a8;
  }
  :active {
    box-shadow: none;
    transform: scale(0.99);
  }
`;
