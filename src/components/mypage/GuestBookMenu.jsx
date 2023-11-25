import React, { useState } from "react";

import GuestBookComponent from "./GuestBookComponent";

const GuestBookMenu = () => {
  // 방명록 개수 count state
  const [cntBook, setCntBook] = useState(0);

  return (
    <div className="guest-book-wrap">
      <div className="count-guest-book">총 {cntBook}개</div>
      <GuestBookComponent setCntBook={setCntBook} />
    </div>
  );
};

export default GuestBookMenu;
