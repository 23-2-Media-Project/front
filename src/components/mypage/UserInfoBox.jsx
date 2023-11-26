import React from "react";

import { ReactComponent as EditSvg } from "../../assets/icons/stylus.svg";
import { ReactComponent as MailSvg } from "../../assets/icons/mail.svg";
import { ReactComponent as LinkSvg } from "../../assets/icons/link.svg";

const UserInfoBox = () => {
  return (
    <div className="user-box-wrap">
      <div className="profile-img"></div>
      <div className="user-name">닉네임</div>
      <div className="description">자기소개를 입력해주세요.</div>
      <button className="info-edit-btn">
        <EditSvg style={{ width: "1vw" }} />
        <div className="btn-text">프로필 수정</div>
      </button>
      <div className="email-wrap">
        <MailSvg style={{ width: ".8vw", height: ".8vw" }} />
        <div className="email">artwalk@ajou.ac.kr</div>
      </div>
      <div className="links-wrap">
        {links.map((link) => {
          return (
            <div key={link} className="link-wrap">
              <LinkSvg style={{ width: "1.2vw" }} />
              <div className="link-text">{link}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserInfoBox;

const links = ["instagram", "naver blog"];
