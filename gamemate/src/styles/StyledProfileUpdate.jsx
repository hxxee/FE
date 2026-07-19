import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  min-height: 100dvh;
  padding: 0 0 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: #fff0c7;
  width: 100%;
  max-width: 402px;
  flex-shrink: 0;
`;

export const Header = styled.div`
  height: 137px;
  width: 393px;
  padding: 64px 25px 32px 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
`;

export const Title = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.4px;
  }
`;

export const Body = styled.div`
  padding-top: 172px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

export const Img = styled.div`
  position: relative;
  width: 58px;
  height: 58px;
  background: #ffe49a;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;

  img#person {
    width: 29.305px;
    height: 29.305px;
  }
`;

export const EditIcon = styled.img`
  position: absolute;
  right: -1px;
  bottom: -1px;
  width: 20px;
  height: 20px;
`;

export const TitleInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 18px;

  p {
    color: #000;
    margin-bottom: 9px;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
  }

  input {
    padding: 20px;
    width: 343px;
    border-radius: 10px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
    outline: none;
  }

  input:focus {
    border-color: #ffe49a;
  }
`;

export const DuplicateText = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  color: #a2a2a2;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
`;

export const Button = styled.button`
  width: 343px;
  height: 55px;
  border-radius: 10px;
  border: 1px solid #ffe49a;
  background: #ffe49a;
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #000;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.34px;
`;
