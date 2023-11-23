import React from "react";
import styled from "styled-components";

import { ReactComponent as FavoriteIcon } from "../../assets/icons/favorite.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/share.svg";

const ListHoverContents = () => {
  return (
    <HoverContets>
      <TitleWrap>
        <Title>전시회 제목</Title>
        <Topic>전시분야</Topic>
      </TitleWrap>
      <IconWrap>
        <FavoriteIcon style={{ width: "0.8vw" }} />
        <LikeCountText>99</LikeCountText>
        <ShareIcon style={{ width: "0.8vw" }} />
      </IconWrap>
    </HoverContets>
  );
};

const LikeCountText = styled.div`
  color: #333;
  font-size: 0.8vw;
`;
const IconWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3vw;
  margin-left: auto;
`;
const Topic = styled.div`
  color: #fff;
  font-size: 0.8vw;
  background-color: rgba(51, 51, 51, 0.5);
  padding: 0.3vw 0.6vw;
  border-radius: 50px;
`;
const Title = styled.div`
  color: #333;
  font-size: 1vw;
  font-weight: 500;
`;
const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5vw;
`;
const HoverContets = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;
export default ListHoverContents;
