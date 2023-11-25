import React, { useEffect } from "react";
import styled from "styled-components";

import { ReactComponent as WarningSvg } from "../../assets/icons/warning.svg";

const GuestBookComponent = ({ setCntBook }) => {
  // 방명록 개수 설정
  useEffect(() => {
    setCntBook(guestBookData.length);
  }, [guestBookData.length]);

  return (
    <>
      {guestBookData.map((data) => {
        return (
          <GuestBookBox>
            <TitleWrap>
              <NickNameWrap>
                <ProfileImg></ProfileImg>
                <div>{data?.nickname}</div>
              </NickNameWrap>
              <SvgWrap>
                <WarningSvg style={{ width: "1.2vw" }} />
              </SvgWrap>
            </TitleWrap>
            <ContentsWrap>{data?.contents}</ContentsWrap>
            <DateWrap>{data?.date}</DateWrap>
          </GuestBookBox>
        );
      })}
    </>
  );
};

export default GuestBookComponent;
const DateWrap = styled.div`
  width: 100%;
  font-size: 0.7vw;
  color: #9e9e9e;
`;
const ContentsWrap = styled.div`
  width: 100%;
  height: max-content;
  font-size: 0.8vw;
  margin-bottom: 1vw;
`;
const SvgWrap = styled.div`
  cursor: pointer;
  opacity: 0.5;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;
const ProfileImg = styled.div`
  width: 1.5vw;
  height: 1.5vw;
  border-radius: 50%;
  background-color: #ededed;
  margin-right: 0.3vw;
`;
const NickNameWrap = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
`;
const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1vw;
`;
const GuestBookBox = styled.div`
  width: 99%;
  margin-left: 0.5%;
  height: max-content;
  padding: 1vw 1.2vw;
  box-sizing: border-box;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

const guestBookData = [
  { nickname: "닉네임", contents: "너무 감각적입니다.", date: "2023.11.23" },
  { nickname: "닉네임", contents: "너무 감각적입니다.", date: "2023.11.23" },
  { nickname: "닉네임", contents: "너무 감각적입니다.", date: "2023.11.23" },
  { nickname: "닉네임", contents: "너무 감각적입니다.", date: "2023.11.23" },
  { nickname: "닉네임", contents: "너무 감각적입니다.", date: "2023.11.23" },
];
