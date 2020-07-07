import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Settings } from '@folio/stripes/smart-components';

import PlatformSettings from './PlatformSettings';

const LTICourses = props => (
  <Settings
    {...props}
    pages={[{
      route: 'platforms',
      label: <FormattedMessage id="ui-lti-courses.platforms" />,
      component: PlatformSettings,
      perm: 'ui-lti-courses.settings.view',
    }]}
    paneTitle={<FormattedMessage id="ui-lti-courses.meta.title" />}
  />
);

export default LTICourses;
