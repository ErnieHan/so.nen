import styled from "styled-components";

export const Content = styled.div`
  width: 25%;
  padding: 1rem;
  @media (max-width: 991px) {
    width: 33.33%;
    padding: 0.5rem;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding: 0;
    padding-bottom: 15px;
  }
`;

export const BoxContent = styled.div`
  width: 100%;
  background: #fff;
  padding: 0.5rem;
  border-radius: 2px;
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Image = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  background: #e9e8e7;
  img {
    position: absolute;
    top: 0;
    left: 0;
  }
  @media (max-width: 767px) {
    width: 40%;
    padding-bottom: 40%;
    order: ${props => (props.order ? "1" : "2")};
  }
`;

export const Body = styled.div`
  padding: 1rem;
  h3 {
    font-weight: bold;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
    line-height: 18px;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 767px) {
    width: 60%;
    padding: 0px 8px;
    order: ${props => (props.order ? "2" : "1")};
  }
`;
