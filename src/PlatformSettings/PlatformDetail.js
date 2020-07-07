import React from 'react';
import { FormattedMessage } from 'react-intl';
import { KeyValue } from '@folio/stripes/components';

export default ({
  initialValues,
  parseInitialValues,
}) => {
  const platform = parseInitialValues(initialValues)?.value ?? {};

  return (
    <>
      <KeyValue
        label={<FormattedMessage id="ui-lti-courses.platform.issuer" />}
        value={platform.issuer}
      />
      <KeyValue
        label={<FormattedMessage id="ui-lti-courses.platform.clientId" />}
        value={platform.clientId}
      />
      <KeyValue
        label={<FormattedMessage id="ui-lti-courses.platform.jwksUrl" />}
        value={platform.jwksUrl}
      />
      <KeyValue
        label={<FormattedMessage id="ui-lti-courses.platform.oidcAuthUrl" />}
        value={platform.oidcAuthUrl}
      />
    </>
  );
};
