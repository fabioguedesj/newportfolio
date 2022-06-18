import classes from './HeaderContent.module.scss';

const HeaderContent = () => {
  return (
    <div className={classes['header-content']}>
      <span className={classes['top-title']}>
        Olá, meu nome é Fábio Guedes, sou um
      </span>
      <h1 className={classes['title']}>Desenvolvedor frontend</h1>
      <span className={classes['caption']}>
        E esse é meu acervo para você 🎁
      </span>
    </div>
  );
};

export default HeaderContent;
