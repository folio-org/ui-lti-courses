import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { KeyValue, NoValue } from '@folio/stripes/components';

const propTypes = {
  initialValues: PropTypes.shape({
    value: PropTypes.string,
  }),
  parseInitialValues: PropTypes.func.isRequired,
};

const PlatformDetail = ({
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
      <KeyValue
        label={<FormattedMessage id="ui-lti-courses.platform.searchUrl" />}
        value={platform.searchUrl}
      />
      <KeyValue
        label={<FormattedMessage id="ui-lti-courses.platform.cssUrl" />}
        value={platform.cssUrl ?? <NoValue />}
      />
      <KeyValue
        label={<FormattedMessage id="ui-lti-courses.platform.noReservesMessage" />}
        value={platform.noReservesMessage ?? <NoValue />}
      />
      <KeyValue
        label={<FormattedMessage id="ui-lti-courses.platform.boxDirectDownload" />}
        value={platform.boxDirectDownload ? <FormattedMessage id="ui-lti-courses.yes" /> : <FormattedMessage id="ui-lti-courses.no" />}
      />
    </>
  );
};

PlatformDetail.propTypes = propTypes;

export default PlatformDetail;
