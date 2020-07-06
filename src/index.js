import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Settings } from '@folio/stripes/smart-components';

import PlatformSettings from './PlatformSettings';

const LTICourses = props => (
  <Settings
    {...props}
    paneTitle={<FormattedMessage id="ui-lti-courses.meta.title" />}
    pages={[{
      route: 'general',
      label: <FormattedMessage id="ui-lti-courses.settings.general" />,
      component: () => 'General',
      perm: 'ui-lti-courses.settings.view'
    }, {
      route: 'platforms',
      label: <FormattedMessage id="ui-lti-courses.settings.platforms" />,
      component: PlatformSettings,
      perm: 'ui-lti-courses.settings.view',
    }]}
  />
);

export default LTICourses;
