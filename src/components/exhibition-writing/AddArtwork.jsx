import { useState } from "react";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/icons/dehaze.svg";
const AddArtwork = () => {
  const [fileName, setFileName] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleOnchangeFile = (e) => {
    setFileName(e.target.value);
  };

  const handleSetIsActive = () => {
    if (fileName !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <article className="add-artwork-container">
      <div className="change-order">
        <HamburgerIcon />
      </div>
      <div className="text-section">
        <div className="title-section">
          <span className="title">작품 제목</span>
          <input
            type="text"
            placeholder="작품 제목을 입력하세요."
            className="input-area"
          />
        </div>
        <div className="add-file-section">
          <span className="title">
            작품 첨부
            <span className="condition"> *</span>
          </span>
          <div className="file-wrapper">
            <input
              className="upload-name input-area"
              placeholder="작품 이미지 또는 영상을 선택하세요."
              value={fileName}
              disabled
              required
            />
            <label htmlFor="file">찾아보기</label>
            <input type="file" id="file" onChange={handleOnchangeFile} />
          </div>
        </div>
        <div className="info-section">
          <span className="title">작품 설명</span>
          <input
            type="text"
            placeholder="작품 설명을 입력하세요."
            className="input-area"
          />
        </div>
      </div>
      <CloseIcon className="close-icon" />
    </article>
  );
};

export default AddArtwork;
