import React, { useCallback, useState } from "react";

import { ReactComponent as PurpleFavoriteSvg } from "../../assets/icons/favorite-purple.svg";
import { ReactComponent as CartSvg } from "../../assets/icons/cart.svg";
import AddCartModal from "../common/AddCartModal";

const WishListMenu = () => {
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
    <div className="wish-list-wrap">
      {wishListItems.map((item, index) => {
        return (
          <div key={index} className="item-wrap">
            <div className="item-img">
              <PurpleFavoriteSvg
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
  );
};

export default WishListMenu;

const wishListItems = [
  {
    name: "위시리스트",
    price: "15,000원",
    real: "비실물",
  },
  {
    name: "위시리스트",
    price: "15,000원",
    real: "비실물",
  },
  {
    name: "위시리스트",
    price: "15,000원",
    real: "비실물",
  },
  {
    name: "위시리스트",
    price: "15,000원",
    real: "비실물",
  },
];
