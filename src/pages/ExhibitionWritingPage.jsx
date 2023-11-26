import React, { useState } from "react";
import ArtworkInfo from "../components/exhibition-writing/ArtworkInfo";
import DefaultInfo from "../components/exhibition-writing/DefaultInfo";
import "../styles/ExhibitionWritingPage.scss";

const ExhibitionWritingPage = () => {
  const [currentPage, setCurrentPage] = useState("default");

  const handleNextPage = () => {
    setCurrentPage("artwork");
  };

  const handlePrevPage = () => {
    setCurrentPage("default");
  };

  return (
    <div className="writing-container">
      {currentPage === "default" ? (
        <DefaultInfo handleNextPage={handleNextPage} />
      ) : (
        <ArtworkInfo
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      )}
    </div>
  );
};

export default ExhibitionWritingPage;
