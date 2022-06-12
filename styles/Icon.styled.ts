import styled from 'styled-components';

const StyleddIcon = styled.svg`
  transition: all 0.2s;

  &:hover {
    transform: translateY(-0.4rem);
    cursor: pointer;
    fill: ${({ theme }) => theme.colors.cyan};
  }

  @media only screen and (max-width: 840px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export default StyleddIcon;
