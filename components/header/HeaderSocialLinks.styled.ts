import styled from 'styled-components';

const StyledSocial = styled.div`
  position: absolute;
  left: 4rem;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 26rem;

  .line {
    background-color: ${({ theme }) => theme.colors.lightGray};
    width: 2px;
    height: 10rem;
    margin: 0 auto;
  }

  @media only screen and (max-width: 840px) {
    height: 24rem;
  }

  @media only screen and (max-width: 768px) {
    left: 50%;
    bottom: 12rem;
    flex-direction: row;
    justify-content: space-around;
    width: 14rem;
    height: fit-content;
    transform: translate(-50%, -50%);

    .line {
      display: none;
    }
  }

  @media only screen and (max-width: 440px) {
    bottom: 12rem;
  }

  @media only screen and (max-width: 350px) {
    bottom: 13rem;
  }
`;

export default StyledSocial;