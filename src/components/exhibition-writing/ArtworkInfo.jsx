import { useEffect, useRef, useState } from "react";
import { ReactComponent as ArrowBack } from "../../assets/icons/arrow_back_ios.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow_forward_ios.svg";
import { ReactComponent as ArrowIconDisabled } from "../../assets/icons/arrow_forward_ios_disabled.svg";
import AddArtwork from "./AddArtwork";

const ArtworkInfo = () => {
  const [addTime, setAddTime] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [addTime]);

  const handleSetAddTime = () => {
    setAddTime(addTime + 1);
  };

  const handleRemove = (indexToRemove) => {
    setAddTime(addTime - 1);
  };

  return (
    <article className="artwork-info-container">
      <span className="page-title">작품 정보 입력</span>
      <div className="artwork-info-wrapper" ref={scrollRef}>
        {Array.from({ length: addTime }).map((_, index) => (
          <AddArtwork
            key={index}
            onRemove={() => handleRemove(index)}
            setIsActive={setIsActive}
          />
        ))}
        <button className="added-button" onClick={handleSetAddTime}>
          <span>+ </span>
          <span>섹션 추가하기</span>
        </button>
      </div>
      <section className="go-to-next-section">
        <button className="prev-button">
          <span className="button-prev">이전</span>
          <ArrowBack style={{ width: "1vw" }} />
        </button>
        <div className="progress-bar">
          <div className="step-one"></div>
          <div className="step-two"></div>
          <div className="step-three"></div>
        </div>
        {isActive ? (
          <button className="next-button">
            <span className="button-text">다음</span>
            <ArrowIcon style={{ width: "1vw" }} />
          </button>
        ) : (
          <button className="next-button" disabled={!isActive}>
            <span className="button-text">다음</span>
            <ArrowIconDisabled style={{ width: "1vw" }} />
          </button>
        )}
      </section>
    </article>
  );
};

export default ArtworkInfo;
