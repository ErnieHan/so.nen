import styled from "styled-components";

export const Content = styled.header`
  padding-top: 40px;
  margin-bottom: 1rem;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  width: 320px;
  margin-bottom: 1rem;
  @media (max-width: 1023px) {
    width: 250px;
  }
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Item = styled.div`
  width: 100px;
  cursor: pointer;
  background-image: ${props => `url(${props.background})`};
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 0.5rem;
  &:last-child {
    margin-right: 0;
  }
  img {
    opacity: ${props => (props.active ? "1" : "0")};
  }
  @media (min-width: 1025px) {
    &:hover {
      img {
        opacity: 1;
      }
    }
  }
`;
