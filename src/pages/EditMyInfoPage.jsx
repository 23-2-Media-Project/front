import React from "react";

import "../styles/EditMyInfoPage.scss";

import profileImg from "../assets/imgs/profile-img.jpg";
import { ReactComponent as StylusSvg } from "../assets/icons/stylus.svg";
import { ReactComponent as LinkSvg } from "../assets/icons/link-black.svg";

import { userInfo } from "../consts/userInfo";

/* TODO:
 * [O] 정보 수정 페이지 퍼블리싱
 */
const EditMyInfoPage = () => {
  return (
    <div className="edit-info-container">
      <div className="title">프로필 정보</div>
      <section className="content-wrap align-start">
        <span className="sub-title">프로필 이미지 *</span>
        <img src={profileImg} alt="profile-img" className="profile-img"></img>
        <button className="apply-btn">등록</button>
        <button className="delete-btn">삭제</button>
      </section>
      <section className="content-wrap">
        <span className="sub-title">이름 *</span>
        <span className="content-text">{userInfo?.name}</span>
      </section>
      <section className="content-wrap">
        <span className="sub-title">닉네임 *</span>
        <span className="content-text">{userInfo?.nickName}</span>
        <span className="limit-text">3/12</span>
      </section>
      <section className="content-wrap">
        <span className="sub-title">이메일 *</span>
        <span className="content-text">{userInfo?.email}</span>
        <button className="submit-btn">인증코드 발송</button>
      </section>
      <section className="content-wrap">
        <span className="sub-title">전화번호 *</span>
        <span className="content-text">{userInfo?.phoneNumber}</span>
        <button className="submit-btn">인증코드 발송</button>
      </section>
      <section className="content-wrap">
        <span className="sub-title">자기소개</span>
        <span className="content-text">{userInfo?.description}</span>
        <span className="limit-text">16/100</span>
      </section>
      <section className="content-wrap align-start">
        <span className="sub-title">링크</span>
        <div className="links-wrap">
          {userInfo?.link.map((link) => {
            return (
              <div className="link-wrap">
                <StylusSvg style={{ width: "1vw", marginRight: "0.3vw" }} />
                <span className="content-text">{link?.linkName}</span>
                <LinkSvg style={{ width: "2.5vw" }} />
                <span className="content-text">{link?.url}</span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default EditMyInfoPage;
