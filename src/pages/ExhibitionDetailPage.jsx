import { useCallback, useState } from "react";

import "../styles/ExhibitionDetailPage.scss";

import { ReactComponent as ShoppingCart } from "../assets/icons/add_shopping_cart.svg";
import { ReactComponent as ShareIC } from "../assets/icons/share.svg";
import { ReactComponent as WarningIC } from "../assets/icons/warning.svg";
import { ReactComponent as FaveActiveSvg } from "../assets/icons/favorite-purple.svg";
import { ReactComponent as FavoriteIC } from "../assets/icons/favorite.svg";
import { ReactComponent as CartSvg } from "../assets/icons/cart.svg";

import imgUrl from "../assets/testImg.png";

import AddCartModal from "../components/common/AddCartModal";

const ExhibitionDetailPage = () => {
  const [clickFavIcon, setClickFavIcon] = useState(false);

  // 좋아요 버튼 클릭 관련
  const [clickTimes, setClickTimes] = useState(0);
  const handleClick = useCallback(
    (e) => {
      const elmClassList = e.target.classList.value.split(" ");
      if (!elmClassList.includes("clicked")) {
        e.target.classList.add("clicked");
        setClickTimes(clickTimes + 1);
      } else if (elmClassList.includes("clicked")) {
        e.target.classList.remove("clicked");
        setClickTimes(clickTimes - 1);
      }
    },
    [clickTimes]
  );

  // 장바구니 버튼 클릭 여부
  const [clickCart, setClickCart] = useState(false);

  return (
    <article className="exhibition-detail-container">
      <div className="detail-wrapper">
        <section className="default-info">
          <div className="default-info-left">
            <span className="title">전시 제목</span>
            <span className="writer">작성자</span>
          </div>
          <div className="default-info-right">
            <span className="date">2023.09.08</span>
            <span className="keyword">#선택 분야</span>
            <span className="keyword">#선택 주제</span>
          </div>
        </section>
        <section className="artwork-wrapper">
          <div className="artwork-title">작품 제목1</div>
          <p className="artwork-explain">
            모장 스튜디오에서 2009년 처음 발매한 샌드박스 형식의 비디오
            게임이다. 이름처럼 채광(Mine)과 제작(Craft)을 하는 게임으로 흔히
            알려져 있다. 모든 것이 네모난 세계에서 혼자, 혹은 여럿이 생존하면서
            채집, 사냥, 농사, 건축, 탐험, PvP 등 정해진 목표 없이 자유롭게 즐길
            수 있다.
          </p>
          <img src={imgUrl} alt="" className="artwork-img" />
        </section>
        <section className="artwork-wrapper">
          <div className="artwork-title">작품 제목2</div>
          <p className="artwork-explain">
            모장 스튜디오에서 2009년 처음 발매한 샌드박스 형식의 비디오
            게임이다. 이름처럼 채광(Mine)과 제작(Craft)을 하는 게임으로 흔히
            알려져 있다. 모든 것이 네모난 세계에서 혼자, 혹은 여럿이 생존하면서
            채집, 사냥, 농사, 건축, 탐험, PvP 등 정해진 목표 없이 자유롭게 즐길
            수 있다.
          </p>
          <img src={imgUrl} alt="" className="artwork-img" />
        </section>
        <section className="artwork-wrapper">
          <div className="artwork-title">작품 제목3</div>
          <p className="artwork-explain">
            모장 스튜디오에서 2009년 처음 발매한 샌드박스 형식의 비디오
            게임이다. 이름처럼 채광(Mine)과 제작(Craft)을 하는 게임으로 흔히
            알려져 있다. 모든 것이 네모난 세계에서 혼자, 혹은 여럿이 생존하면서
            채집, 사냥, 농사, 건축, 탐험, PvP 등 정해진 목표 없이 자유롭게 즐길
            수 있다.
          </p>
          <img src={imgUrl} alt="" className="artwork-img" />
        </section>
        <section className="icon-wrapper">
          <div
            className="icon-left"
            onClick={() => setClickFavIcon(!clickFavIcon)}
          >
            {clickFavIcon ? (
              <FavoriteIC className="icon" style={{ width: "1.3vw" }} />
            ) : (
              <FaveActiveSvg className="icon" style={{ width: "1.3vw" }} />
            )}
            <span className="text">
              {clickFavIcon ? "좋아요 17" : "좋아요 18"}
            </span>
          </div>
          <div className="icon-right">
            <ShareIC className="icon" style={{ width: "1.3vw" }} />
            <WarningIC className="icon" style={{ width: "1.4vw" }} />
          </div>
        </section>
        <section className="related-goods-section">
          <div className="related-title">
            관련 상품 ({wishListItems.length})
          </div>
          <div className="related-goods-wrap">
            {wishListItems.map((item, index) => {
              return (
                <div key={index} className="item-wrap">
                  <div className="item-img">
                    <FaveActiveSvg
                      onClick={handleClick}
                      className="favorite-icon"
                      style={{ width: "1.4vw" }}
                    />
                  </div>
                  <div className="item-content-wrap">
                    <div className="left-content-wrap">
                      <div className="name">{item?.name}</div>
                      <div className="price-real">
                        <div className="price">{item?.price}</div>
                        <div className="real">{item?.real}</div>
                      </div>
                    </div>
                    <CartSvg
                      className="cart-icon"
                      style={{ width: "1.8vw" }}
                      onClick={() => setClickCart(true)}
                    />
                  </div>
                </div>
              );
            })}
            {clickCart && <AddCartModal setClickCart={setClickCart} />}
          </div>
        </section>
      </div>
    </article>
  );
};

export default ExhibitionDetailPage;

const wishListItems = [
  {
    name: "상품1",
    price: "15,000원",
    real: "비실물",
  },
  {
    name: "상품2",
    price: "15,000원",
    real: "비실물",
  },
  {
    name: "상품3",
    price: "15,000원",
    real: "비실물",
  },
  {
    name: "상품4",
    price: "15,000원",
    real: "비실물",
  },
  {
    name: "상품5",
    price: "15,000원",
    real: "비실물",
  },
];
