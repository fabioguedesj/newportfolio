import StyleddIcon from "styles/Icon.styled";

const Medium = () => {
  return (
    <StyleddIcon
      fill='#dddddd'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 30 30'
      width='40px'
      height='40px'
      onClick={() =>
        window.open('https://medium.com/@fabioaz.guedes', '_blank')
      }>
      <path d='M8.5 7A8.5 8.5 0 108.5 24 8.5 8.5 0 108.5 7zM22 8A4 7.5 0 1022 23 4 7.5 0 1022 8zM28.5 9A1.5 6.5 0 1028.5 22 1.5 6.5 0 1028.5 9z' />
    </StyleddIcon>
  );
};

export default Medium;