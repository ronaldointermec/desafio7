import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  rote: { path: '/import' | '/'; buttonName: 'Importar' | 'Voltar' };
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  rote,
}: HeaderProps) => {
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to={rote.path}>
            <button type="button" name="Importar">
              {rote.buttonName}
            </button>
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
