import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>Informações:</title>
      </Helmet>
      <Container type="content">
          <h1>Informações</h1>
          Os dados são obtidos das seguintes fontes:
          <ul>
            <li>https://corona.lmao.ninja/countries</li>
            <li>https://www.worldometers.info/coronavirus/</li>
          </ul>

          <h1>Observações</h1>
          <ul>
            <li>Quando sair de casa, se possível, use máscara;</li>
            <li>Faça a higienização adequada das mãos;</li>
            <li>Evite locais públicos com aglomeração de pessoas;</li>
          </ul>
          Para atualizar as informações do mapa, recarregue a página.
      </Container>
    </Layout>
  );
};

export default SecondPage;
