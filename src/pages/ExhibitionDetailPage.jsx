import { ReactComponent as FavoriteIC } from "../assets/icons/favorite.svg";
import imgUrl from "../assets/testImg.png";
import "../styles/ExhibitionDetailPage.scss";
// import { ReactComponent as FavoritePurpleIc } from "../assets/icons/favorite-purple.svg";
import { ReactComponent as ShoppingCart } from "../assets/icons/add_shopping_cart.svg";
import { ReactComponent as ShareIC } from "../assets/icons/share.svg";
import { ReactComponent as WarningIC } from "../assets/icons/warning.svg";

const ExhibitionDetailPage = () => {
  return (
    <article className="exhibition-detail-container">
      <div className="detail-wrapper">
        <section className="default-info">
          <div className="default-info-left">
            <span className="title">전시 제목</span>
            <span className="writer">작성자</span>
          </div>
          <div className="default-info-right">
            <span>작성 날짜</span>
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
          <div className="icon-left">
            <FavoriteIC className="icon" />
            <span>좋아요 17</span>
          </div>
          <div className="icon-rignt">
            <ShareIC className="icon" />
            <WarningIC className="icon" />
          </div>
        </section>
        <section className="related-goods-list">
          <div className="related-title">관련 상품 (6)</div>
          <div className="goods-list">
            <div className="each-goods">
              <img src={imgUrl} alt="" />
              <div className="goods-info-section">
                <div className="info-left">
                  <span className="goods-title">상품명</span>
                  <div className="goods-info">
                    <span className="price">5,600원</span>
                    <span className="real-or-not">비실물</span>
                  </div>
                </div>
                <div className="add-cart">
                  <ShoppingCart />
                </div>
              </div>
            </div>
            <div className="each-goods">
              <img src={imgUrl} alt="" />
              <div className="goods-info-section">
                <div className="info-left">
                  <span className="goods-title">상품명</span>
                  <div className="goods-info">
                    <span className="price">5,600원</span>
                    <span className="real-or-not">비실물</span>
                  </div>
                </div>
                <div className="add-cart">
                  <ShoppingCart />
                </div>
              </div>
            </div>
            <div className="each-goods">
              <img src={imgUrl} alt="" />
              <div className="goods-info-section">
                <div className="info-left">
                  <span className="goods-title">상품명</span>
                  <div className="goods-info">
                    <span className="price">5,600원</span>
                    <span className="real-or-not">비실물</span>
                  </div>
                </div>
                <div className="add-cart">
                  <ShoppingCart />
                </div>
              </div>
            </div>
            <div className="each-goods">
              <img src={imgUrl} alt="" />
              <div className="goods-info-section">
                <div className="info-left">
                  <span className="goods-title">상품명</span>
                  <div className="goods-info">
                    <span className="price">5,600원</span>
                    <span className="real-or-not">비실물</span>
                  </div>
                </div>
                <div className="add-cart">
                  <ShoppingCart />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default ExhibitionDetailPage;
