import React from "react";
import styled from "styled-components";

const AddCartModal = ({ setClickCart }) => {
  return (
    <ModalWrap>
      <ModalBox>
        <Text>해당 상품을 장바구니에 담으시겠습니까?</Text>
        <BtnWrap>
          <GrayBtn onClick={() => setClickCart(false)}>취소</GrayBtn>
          <BlackBtn onClick={() => setClickCart(false)}>댬기</BlackBtn>
        </BtnWrap>
      </ModalBox>
    </ModalWrap>
  );
};

export default AddCartModal;

const Text = styled.div`
  margin: auto 0;
  font-size: 1vw;
  font-weight: 500;
`;
const BlackBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.5vw;
  background-color: #000;
  color: #fff;
  border-radius: 3px;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;
const GrayBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.5vw;
  background-color: #dedede;
  color: #333;
  border-radius: 3px;
  font-weight: 500;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;
const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 1vw;
`;
const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  height: 10vw;
  width: 20vw;
  border-radius: 4px;
  padding: 1vw;
`;
const ModalWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  max-height: max-content;
  background-color: rgba(0, 0, 0, 0.2);
`;
