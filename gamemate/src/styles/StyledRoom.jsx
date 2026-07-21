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
  gap: 37px;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const CTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  #title {
    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
  }

  #members {
    color: #767676;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.26px;
  }
`;



export const Body = styled.div`
  flex: 1;
  min-height: 0;

  padding-top: 137px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
`;

export const Board = styled.div`
  width: 343px;

  height: calc(100dvh - 157px);
  min-height: 400px;
  max-height: 690px;

  border-radius: 30px;
  background: #fffcf4;

  padding: 21px 20px 60px;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  overflow: hidden;
`;

export const ProfileImg = styled.div`
 width: 35px;
  height: 35px;
  background: #d9d9d9;
  border-radius: 50%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Text = styled.div`
gap: 6px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const Rcontent = styled.div`
  width: 100%;
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 18px;
`;

export const TitleContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
`;
export const OptionContent = styled.div`
  width: 295px;
  min-height: 36px;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #ffe49a;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;

  div {
    min-width: 0;
    color: #21272a;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div + div::before {
    content: "|";
    margin-right: 8px;
    color: #c9a947;
  }
`;
export const Description = styled.div`
  width: 295px;
  color: #21272a;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
  word-break: keep-all;
  overflow-wrap: anywhere;
`;
export const Up = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  #title {
    color: #21272a;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 16.5px */
  }

  #members {
    color: #21272a;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 16.5px */
  }

  #status {
    flex: 0 0 auto;
    padding: 3px 8px;
    border-radius: 10px;
    background: #ffe49a;
    color: #000;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
`;
export const Down = styled.div`
  color: #697077;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
`;

export const Button = styled.button`
  width: 100%;
  height: 55px;
  margin-top: auto;
  border-radius: 10px;
  border: 1px solid #ffe49a;
  background: #ffe49a;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.34px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #000;
  cursor: pointer;
`;
