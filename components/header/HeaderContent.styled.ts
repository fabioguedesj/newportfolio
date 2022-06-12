import styled from 'styled-components';

const StyledHeaderContent = styled.div`
  max-width: 60rem;
  text-align: center;
  padding: 0 2rem;

  .top-title {
    display: block;
    font-size: 2.1rem;
    color: ${({ theme }) => theme.colors.cyan};
  }

  .title {
    font-size: 7.6rem;
    line-height: 8rem;
    color: ${({ theme }) => theme.colors.white};
  }

  .caption {
    display: block;
    color: ${({ theme }) => theme.colors.darkGray};
    margin-top: 2rem;
  }

  @media only screen and (max-width: 840px) {
    max-width: 50rem;

    .top-title {
      font-size: 1.8rem;
    }

    .title {
      font-size: 6rem;
      line-height: 6rem;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 8rem;
  }

  @media only screen and (max-width: 440px) {
    .title {
      font-size: 5rem;
      line-height: 5rem;
    }

    .caption {
      font-size: 1.6rem;
    }
  }

  @media only screen and (max-width: 350px) {
    .top-title {
      font-size: 1.6rem;
    }

    .title {
      font-size: 4rem;
      line-height: 4.5rem;
    }
  }
`;

export default StyledHeaderContent;
