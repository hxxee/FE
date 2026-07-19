import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 0px;
  min-height: 100dvh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  display: flex;
  flex-direction: column;
  background: #fff0c7;
  width: 100%;
  max-width: 402px;
  flex-shrink: 0;
  padding-bottom: 30px;
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
  gap:20px;
    p{
    color: #000;
    margin-bottom: 9px;
font-family: Pretendard;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.3px;
}

`;
export const Img = styled.div`
  width: 58px;
  height: 58px;
  background: #ffe49a;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;

  img {
    width: 29.305px;
    height: 29.305px;
  }
`;

export const TitleInput = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
input{
padding:20px;
width: 343px;
    border-radius: 10px;
background: #ffffff;
border: 1px solid #D9D9D9;
color: #A2A2A2;
font-family: Pretendard;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.3px;
}
`;
export const Button = styled.button`
width: 343px;
  height: 55px;
  border-radius: 10px;
  border: 1px solid #ffe49a;
  background: #ffe49a;
  margin-top: 30px;
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

&:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
`;

export const Message = styled.p`
  width: 343px;
  color: ${({ $isError }) => ($isError ? "#d93025" : "#188038")} !important;
  margin: 0 !important;
  font-family: Pretendard;
  font-size: 14px !important;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.28px;
`;
