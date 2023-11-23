import "../../styles/ExhibitionWritingPage.scss";
import { useState, useCallback } from "react";

const FieldList = [
  "그래픽디자인",
  "3D디자인",
  "영상디자인",
  "제품디자인",
  "공간디자인",
  "앱/웹디자인",
  "게임디자인",
  "사운드디자인",
  "패션디자인",
];
const SubjectList = [
  "예술",
  "문화",
  "다양성",
  "교육",
  "음식 및 음료",
  "여행",
  "자연",
  "스토리",
  "미디어",
  "플랫폼",
  "미래지향",
  "인터랙티브",
  "기념적인",
  "감성적인",
  "자연친화적인",
  "공익적인",
  "지속가능성",
  "기술",
  "우주",
  "사랑",
  "게임",
  "캐릭터",
  "사진",
  "취미",
];

const DefaultInfo = () => {
  const [fieldClickTimes, setFieldClickTimes] = useState(0);
  const [subjectClickTimes, setSubjectClickTimes] = useState(0);

  const handleFieldClick = useCallback(
    (e) => {
      // 3개까지만 선택 가능
      const elmClassList = e.target.classList.value.split(" ");
      if (fieldClickTimes < 2 && !elmClassList.includes("clicked-element")) {
        e.target.classList.add("clicked-element");
        setFieldClickTimes(fieldClickTimes + 1);
      } else if (elmClassList.includes("clicked-element")) {
        e.target.classList.remove("clicked-element");
        setFieldClickTimes(fieldClickTimes - 1);
      }
    },
    [fieldClickTimes]
  );

  const handleSubjectClick = useCallback(
    (e) => {
      // 3개까지만 선택 가능
      const elmClassList = e.target.classList.value.split(" ");
      if (subjectClickTimes < 3 && !elmClassList.includes("clicked-element")) {
        e.target.classList.add("clicked-element");
        setSubjectClickTimes(subjectClickTimes + 1);
      } else if (elmClassList.includes("clicked-element")) {
        e.target.classList.remove("clicked-element");
        setSubjectClickTimes(subjectClickTimes - 1);
      }
    },
    [subjectClickTimes]
  );

  return (
    <>
      <article className="defaultinfo-container">
        <div className="defaultinfo-wrapper">
          <span className="page-title">기본 정보 입력</span>
          <input
            className="exhibition-title"
            type="text"
            placeholder="전시회 제목을 입력하세요"
            required
          />
          <section className="category-wrapper">
            <div className="title-wrapper">
              <span className="title">분야 카테고리</span>
              <span className="condition">*최대 2개 선택</span>
            </div>
            <div className="category-btn-wrapper">
              {FieldList.map((field) => {
                return (
                  <span
                    key={field}
                    onClick={handleFieldClick}
                    className="each-category"
                  >
                    {field}
                  </span>
                );
              })}
            </div>
          </section>
          <section className="category-wrapper">
            <div className="title-wrapper">
              <span className="title">주제 카테고리</span>
              <span className="condition">*최대 3개 선택</span>
            </div>
            <div className="category-btn-wrapper">
              {SubjectList.map((subject) => {
                return (
                  <span
                    key={subject}
                    onClick={handleSubjectClick}
                    className="each-category"
                  >
                    {subject}
                  </span>
                );
              })}
            </div>
          </section>
          <section className="file-container">
            <span className="title">썸네일</span>
            <div className="file-wrapper">
              <input
                className="upload-name"
                placeholder="썸네일을 선택하세요.(사이즈 제한 456*300)"
                disabled
                required
              />
              <label htmlFor="file">찾아보기</label>
              <input type="file" id="file" />
            </div>

            {/* 참고 https://velog.io/@sklove96/inputtypefile-%EC%BB%A4%EC%8A%A4%ED%85%80%ED%95%98%EA%B8%B0 */}
          </section>
        </div>
      </article>
    </>
  );
};

export default DefaultInfo;
