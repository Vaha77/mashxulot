import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 100vh;
  border: 1px solid red;
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid red;
`;
export const Title = styled.div`
  margin: 17px 24px;
  font-weight: 600;
  font-size: 23px;
  line-height: 25px;
  color: #109cf1;
`;
export const TitleWrapper = styled.div`
  display: flex;
  margin: 24px;
`;
export const SidbarImg = styled.img`
  border-radius: 50%;
  width: 67px;
  height: 67px;
  color: ${(props) => (props.isActive ? "#109CF1;" : " #334D6E;")};
`;
