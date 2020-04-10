import React from 'react';
import { Link } from 'gatsby';
import { FaGithub } from 'react-icons/fa'
import { FaInfoCircle } from 'react-icons/fa';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <Link to="/"><p>Mapa Mundial de casos COVID-19</p> </Link>
        <ul>
          <li>
            <Link to="/page-2/">
              <FaInfoCircle /> Info 
            </Link>
          </li>
          <li>
            <a href="https://github.com/vdidi">
              <FaGithub /> Github
            </a>
          </li>
        </ul>
      </Container>

    </header>
  );
};

export default Header;
