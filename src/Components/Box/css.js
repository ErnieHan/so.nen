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
    padding-bottom: 15px;
  }
`;

export const BoxContent = styled.div`
  width: 100%;
  background: #fff;
  padding: 0.5rem;
  border-radius: 2px;
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
`;
