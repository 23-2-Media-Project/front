import { useEffect, useState } from "react";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/icons/dehaze.svg";
const AddMerchandise = ({ setAddTime, onRemove, setIsActive }) => {
  const [goodsTitle, setGoodsTitle] = useState(""); //상품이름
  const [goodsPrice, setGoodsPrice] = useState(""); //상품 가격
  const [goodsFile, setGoodsFile] = useState(""); //상품 파일
  const [isChecked, setIsChecked] = useState(false); //상품 실물 비실물

  const handleOnChangeFile = (e) => {
    setGoodsFile(e.target.value);
  };

  const handleOnChangeTitle = (e) => {
    setGoodsTitle(e.target.value);
  };

  const handleSetGoodsPrice = (e) => {
    setGoodsPrice(e.target.value);
  };

  const handleRemove = () => {
    onRemove();
  };

  const handleSetIsActive = () => {
    if (
      goodsTitle !== "" &&
      goodsPrice !== "" &&
      goodsFile !== "" &&
      !isChecked
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  useEffect(() => {
    handleSetIsActive();
  }, [goodsTitle, goodsFile, goodsPrice, isChecked]);

  return (
    <article className="add-merchandise-container">
      <div className="change-order">
        <HamburgerIcon />
      </div>
      <div className="input-section">
        <div className="title-section">
          <span className="title">
            상품 이름
            <span className="condition"> *</span>
          </span>
          <input
            type="text"
            placeholder="상품 이름을 입력하세요."
            className="input-area"
            required
            onChange={handleOnChangeTitle}
          />
        </div>
        <div className="add-file-section">
          <span className="title">
            상품 이미지
            <span className="condition"> *</span>
          </span>
          <div className="file-wrapper">
            <input
              className="upload-name"
              placeholder="상품 이미지를 선택하세요"
              value={goodsFile}
              disabled
              required
            />
            <label htmlFor="file">찾아보기</label>
            <input type="file" id="file" onChange={handleOnChangeFile} />
          </div>
        </div>
        <div className="price-section">
          <span className="title">
            상품 가격
            <span className="condition"> *</span>
          </span>
          <input
            type="text"
            placeholder="작품 설명을 입력하세요."
            className="input-area"
            onChange={handleSetGoodsPrice}
          />
        </div>
        <div className="real-or-not">
          <span className="title">
            실물 여부
            <span className="condition"> *</span>
          </span>
          <div className="radio-button-section">
            <label htmlFor="isReal" className="isReal">
              <input type="radio" name="realOrNot" id="isReal" />
              <span>실물</span>
            </label>
            <label htmlFor="isNotReal">
              <input type="radio" name="realOrNot" id="isNotReal" />
              <span>비실물</span>
            </label>
          </div>
        </div>
      </div>
      <CloseIcon className="close-icon" onClick={handleRemove} />
    </article>
  );
};

export default AddMerchandise;
