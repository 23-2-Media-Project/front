import React, { useState } from "react";

import ArtworkInfo from "../components/exhibition-writing/ArtworkInfo";
import DefaultInfo from "../components/exhibition-writing/DefaultInfo";
import Merchandise from "../components/exhibition-writing/Merchandise";

import "../styles/ExhibitionWritingPage.scss";

const ExhibitionWritingPage = () => {
  const [currentPage, setCurrentPage] = useState("default");

  const handleMerchandisePage = () => {
    setCurrentPage("merchandise");
  };

  const handleArtworkPage = () => {
    setCurrentPage("artwork");
  };

  const handleDefaultInfoPage = () => {
    setCurrentPage("default");
  };

  return (
    <div className="writing-container">
      {currentPage === "default" ? (
        <DefaultInfo handleNextPage={handleArtworkPage} />
      ) : currentPage === "artwork" ? (
        <ArtworkInfo
          handlePrevPage={handleDefaultInfoPage}
          handleNextPage={handleMerchandisePage}
        />
      ) : (
        <Merchandise handlePrevPage={handleArtworkPage} />
      )}
    </div>
  );
};

export default ExhibitionWritingPage;
