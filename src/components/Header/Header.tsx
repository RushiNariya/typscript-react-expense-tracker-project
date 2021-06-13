import React from 'react';
import { useTranslation } from 'react-i18next';

function Header(): JSX.Element {
  const { t } = useTranslation();

  return <h2 className="title">{t('header')}</h2>;
}

export default Header;
