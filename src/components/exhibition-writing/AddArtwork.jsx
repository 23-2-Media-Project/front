import { ReactComponent as HamburgerIcon } from "../../assets/icons/dehaze.svg";
const AddArtwork = () => {
  return (
    <article className="add-artwork-container">
      <section>
        <div className="change-order">
          <HamburgerIcon />
        </div>
        <div className="text-section">
          <div className="title-section">
            <span className="title">작품 제목</span>
            <input type="text" placeholder="작품 제목을 입력하세요." />
          </div>
          <div className="add-file-section">
            <span className="title">
              작품 첨부
              <span> *</span>
            </span>
            <div className="file-wrapper">
              <input
                className="upload-name"
                placeholder="작품 이미지 또는 영상을 선택하세요."
                // value={fileName}
                disabled
                required
              />
              <label htmlFor="file">찾아보기</label>
              <input type="file" id="file" />
            </div>
          </div>
          <div className="info-section">
            <span>작품 설명</span>
            <input type="text" placeholder="작품 설명을 입력하세요." />
          </div>
        </div>
      </section>
    </article>
  );
};

export default AddArtwork;
