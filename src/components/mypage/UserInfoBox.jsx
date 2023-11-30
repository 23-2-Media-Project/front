import React from "react";

import { ReactComponent as EditSvg } from "../../assets/icons/stylus.svg";
import { ReactComponent as MailSvg } from "../../assets/icons/mail.svg";
import { ReactComponent as LinkSvg } from "../../assets/icons/link.svg";
import { Link } from "react-router-dom";

const UserInfoBox = ({ userInfo }) => {
  return (
    <div className="user-box-wrap">
      <div className="profile-img"></div>
      <div className="user-name">{userInfo?.nickName}</div>
      <div className="description">{userInfo?.description}</div>
      <Link className="info-edit-btn" to={"/mypage/edit"}>
        <EditSvg style={{ width: "1vw" }} />
        <div className="btn-text">프로필 수정</div>
      </Link>
      <div className="email-wrap">
        <MailSvg style={{ width: ".8vw", height: ".8vw" }} />
        <div className="email">{userInfo?.email}</div>
      </div>
      <div className="links-wrap">
        {userInfo?.link.map((link) => {
          return (
            <div
              key={link.linkName}
              className="link-wrap"
              onClick={() => window.open(`${link.url}`)}
            >
              <LinkSvg style={{ width: "1.2vw" }} />
              <div className="link-text">{link.linkName}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserInfoBox;

const links = ["instagram", "naver blog"];
