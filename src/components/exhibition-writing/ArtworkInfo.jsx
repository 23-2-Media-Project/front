import AddArtwork from "./AddArtwork";

const ArtworkInfo = () => {
  return (
    <article className="artwork-info-container">
      <div className="artwork-info-wrapper">
        <span className="page-title">작품 정보 입력</span>
        <AddArtwork />
        <button>
          <span>+ </span>
          <span>섹션 추가하기</span>
        </button>
      </div>
    </article>
  );
};

export default ArtworkInfo;
