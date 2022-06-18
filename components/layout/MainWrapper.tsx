import FooterSection from './FooterSection';
import HeaderSection from './HeaderSection';
import classes from './MainWrapper.module.scss';
import Head from 'next/head';
import { FC } from 'react';

type Props = {
  children: JSX.Element;
};

const metaData = {
  title: 'Desenvolvedor Frontend - Fábio Guedes',
  description:
    'Olá, meu nome é Fábio Guedes e sou um Desenvolvedor Frontend. Aqui estão todos os recursos que uso no meu dia a dia de forma gratuita pra você.',
  url: 'https://fabiocoding.com/',
  image: '/desenvolvedor-frontend-banner.jpg',
};

const MainWrapper: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name='theme-color' content='#ffffff' />
        {/* Primary Meta Tags */}
        <title>{metaData.title}</title>
        <meta name='title' content={metaData.title} />
        <meta name='description' content={metaData.description} />
        <meta
          name='keywords'
          content='portfolio, dev, frontend, desenvolvedor, desenvolvimento'
        />
        <meta name='author' content='Fabio Guedes' />
        <meta name='copyright' content='© 2022 Fabio Guedes' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={metaData.url} />
        <meta property='og:title' content={metaData.title} />
        <meta property='og:description' content={metaData.description} />
        <meta property='og:image' content={metaData.image} />

        {/* Twitter  */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={metaData.url} />
        <meta property='twitter:title' content={metaData.title} />
        <meta property='twitter:description' content={metaData.description} />
        <meta property='twitter:image' content={metaData.image} />
      </Head>

      <HeaderSection />
      <main className={classes.main}>{children}</main>
      <FooterSection />
    </>
  );
};

export default MainWrapper;
