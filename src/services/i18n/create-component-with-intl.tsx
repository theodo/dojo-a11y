import React, { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import renderer from 'react-test-renderer';
import frMessages from 'translations/fr.json';

import { flattenMessages } from './intl';

const locales = {
  fr: flattenMessages(frMessages),
};

const createComponentWithIntl = (
  children: ReactNode,
  props = { locale: 'fr', messages: locales.fr },
) => renderer.create(<IntlProvider {...props}>{children}</IntlProvider>);

export default createComponentWithIntl;
