import StyledHeaderContent from './HeaderContent.styled';

const HeaderContent = () => {
  return (
    <StyledHeaderContent>
      <span className='top-title'>Olá, meu nome é Fábio Guedes, sou um</span>
      <h1 className='title'>Desenvolvedor frontend</h1>
      <span className='caption'>
        Sites | Portfólios | Aplicações WEB | Mentorias
      </span>
    </StyledHeaderContent>
  );
};

export default HeaderContent;
