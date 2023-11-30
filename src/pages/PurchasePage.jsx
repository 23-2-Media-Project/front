import React, { useCallback, useEffect, useState } from "react";

import "../styles/PurchasePage.scss";

import { ReactComponent as CheckBoxSvg } from "../assets/icons/check-box.svg";

const PurchasePage = () => {
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

  // 수량 증감 버튼 관련 로직들
  const [clickIndex, setClickIndex] = useState(0);
  const [num, setNum] = useState(0);
  const [clickIncreaseBtn, setClickIncreaseBtn] = useState(0);
  const [clickDecreaseBtn, setClickDecreaseBtn] = useState(0);
  useEffect(() => {
    purchaseItems[clickIndex].count += 1;
    setNum(purchaseItems[clickIndex].count);
  }, [clickIncreaseBtn]);
  useEffect(() => {
    purchaseItems[clickIndex].count -= 1;
    setNum(purchaseItems[clickIndex].count);
  }, [clickDecreaseBtn]);

  return (
    <container className="purchase-container">
      <div className="title-wrap">
        <span className="title">장바구니</span>
        <span className="title">({purchaseItems.length})</span>
      </div>
      <table className="shopping-cart-table">
        <thead className="table-head">
          <th className="check-box-wrap" scope="col" onClick={handleClick}>
            선택
          </th>
          <th className="order-info" scope="col">
            상품정보
          </th>
          <th className="order-count" scope="col">
            수량
          </th>
          <th className="order-state" scope="col">
            주문처리상태
          </th>
          <th className="order-price" scope="col">
            상품구매금액
          </th>
          <th className="order-option" scope="col">
            옵션
          </th>
        </thead>

        <tbody className="table-body">
          <tr className="order-lists-wrap">
            {purchaseItems.map((list, index) => {
              return (
                <div className="order-list-wrap">
                  <td className="check-box-wrap" onClick={handleClick}>
                    <div className="check-box">
                      <CheckBoxSvg className="check" />
                    </div>
                  </td>
                  <td className="order-info">
                    <div className="order-img"></div>
                    <div className="order-name-real">
                      <div className="order-name">{list.name}</div>
                      <div className="order-real">{list.real}</div>
                    </div>
                  </td>
                  <td className="order-count">
                    <span
                      className="decrease btn"
                      onClick={() => {
                        setClickIndex(index);
                        setClickDecreaseBtn(clickDecreaseBtn + 1);
                      }}
                    >
                      -
                    </span>
                    <span>{list.count}</span>
                    <span
                      className="increase btn"
                      onClick={() => {
                        setClickIndex(index);
                        setClickIncreaseBtn(clickIncreaseBtn + 1);
                      }}
                    >
                      +
                    </span>
                  </td>
                  <td className="order-state">{list.state}</td>
                  <td className="order-price">{list.price}원</td>
                  <td className="order-option">
                    <button className="option-btn">주문하기</button>
                    <button className="option-btn">삭제하기</button>
                  </td>
                </div>
              );
            })}
          </tr>
        </tbody>
      </table>
      <div className="total-price-wrap">
        <div className="sub-price-wrap">
          <span className="text1">총 상품금액</span>
          <span className="text2">60,000원</span>
        </div>
        <span className="text2">+</span>
        <div className="sub-price-wrap">
          <span className="text1">배송비</span>
          <span className="text2">3,000원</span>
        </div>
        <span className="text2">=</span>
        <div className="sub-price-wrap">
          <span className="text1">합계</span>
          <span className="text2">53,000원</span>
        </div>
      </div>
      <div className="btn-wrap">
        <button className="btn black">구매하기</button>
        <button className="btn gray">선택상품 구매</button>
      </div>
    </container>
  );
};

export default PurchasePage;

const purchaseItems = [
  {
    count: 1,
    name: "구매 아이템1",
    real: "비실물",
    price: 15000,
    state: "배송완료",
  },
  {
    count: 1,
    name: "구매 아이템2",
    real: "비실물",
    price: 15000,
    state: "배송",
  },

  {
    count: 1,
    name: "구매 아이템3",
    real: "비실물",
    price: 15000,
    state: "배송",
  },
  {
    count: 1,
    name: "구매 아이템4",
    real: "비실물",
    price: 15000,
    state: "배송",
  },
];
