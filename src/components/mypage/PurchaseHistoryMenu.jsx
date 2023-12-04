import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

import { ReactComponent as CalendarSvg } from "../../assets/icons/calendar.svg";

import { purchaseListData } from "../../consts/purchaseListData";

const PurchaseHistoryMenu = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="purchase-history-wrap">
      <div className="date-pickers-wrap">
        <div className="date-picker-wrap">
          <DatePicker
            locale={ko}
            dateFormat="yyyy-MM-dd"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <CalendarSvg style={{ width: "2.5vw" }} />
        </div>
        <div className="middle-text">~</div>
        <div className="date-picker-wrap">
          <DatePicker
            locale={ko}
            dateFormat="yyyy-MM-dd"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <CalendarSvg style={{ width: "2.5vw" }} />
        </div>
        <div className="search-btn">조회</div>
      </div>
      <div className="title">주문 상품 정보</div>
      <table className="purchase-table">
        <thead className="table-head">
          <th className="head-col order-num" scope="col">
            주문일자/주문번호
          </th>
          <th className="head-col order-info" scope="col">
            상품정보
          </th>
          <th className="head-col order-count" scope="col">
            수량
          </th>
          <th className="head-col order-price" scope="col">
            상품구매금액
          </th>
          <th className="head-col order-state" scope="col">
            주문처리상태
          </th>
        </thead>
        {purchaseListData.map((item, index) => {
          return (
            <tbody className="table-body">
              <td rowSpan={item.lists.length} className="order-num">
                <div>{item.date}</div>
                <div>[{item.orderNum}]</div>
              </td>
              <td className="order-lists">
                {item.lists.map((list) => {
                  return (
                    <div className="order-list">
                      <td className="order-info">
                        <div
                          className="order-img"
                          style={{
                            backgroundImage: `url(${list.img})`,
                            backgroundSize: "cover",
                          }}
                        ></div>
                        <div className="order-name-real">
                          <div className="order-name">{list.name}</div>
                          <div className="order-real">{list.real}</div>
                        </div>
                      </td>
                      <td className="order-count">{list.count}</td>
                      <td className="order-price">{list.price}</td>
                      <td className="order-state">{list.state}</td>
                    </div>
                  );
                })}
              </td>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default PurchaseHistoryMenu;
