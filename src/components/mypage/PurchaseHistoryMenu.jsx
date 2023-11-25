import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

import { ReactComponent as CalendarSvg } from "../../assets/icons/calendar.svg";

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
    </div>
  );
};

export default PurchaseHistoryMenu;
