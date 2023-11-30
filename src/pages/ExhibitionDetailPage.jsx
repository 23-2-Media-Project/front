import { useCallback, useState } from "react";

import "../styles/ExhibitionDetailPage.scss";

import { ReactComponent as ShareIC } from "../assets/icons/share.svg";
import { ReactComponent as WarningIC } from "../assets/icons/warning.svg";
import { ReactComponent as FaveActiveSvg } from "../assets/icons/favorite-purple.svg";
import { ReactComponent as FavoriteIC } from "../assets/icons/favorite.svg";
import { ReactComponent as CartSvg } from "../assets/icons/cart.svg";

import { detailData, purchaseLists } from "../consts/exhibitionDetailData";

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
            <span className="title">{detailData?.title}</span>
            <span className="writer">{detailData?.artist}</span>
          </div>
          <div className="default-info-right">
            <span className="date">{detailData?.date}</span>
            <span className="keyword">#{detailData?.category}</span>
            <span className="keyword">#{detailData?.topic}</span>
          </div>
        </section>
        {detailData?.section.map((data) => {
          return (
            <section className="artwork-wrapper">
              <div className="artwork-title">{data?.title}</div>
              <p className="artwork-explain">{data?.desc}</p>
              <img src={data.img} alt={"img"} className="artwork-img" />
            </section>
          );
        })}
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
            관련 상품 ({purchaseLists.length})
          </div>
          <div className="related-goods-wrap">
            {purchaseLists.map((item, index) => {
              return (
                <div key={index} className="item-wrap">
                  <div
                    className="item-img"
                    style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: "cover",
                      backgroundPositionY: "center",
                    }}
                  >
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
