import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Field } from 'redux-form';
import { Pane, Paneset, TextField } from '@folio/stripes/components';

export default ({
  handleSubmit,
  onSave,
}) => (
  <>
    <Field
      autoFocus
      component={TextField}
      label={<FormattedMessage id="ui-lti-courses.platform.issuer" />}
      name="value.issuer"
      required
    />
    <Field
      component={TextField}
      label={<FormattedMessage id="ui-lti-courses.platform.clientId" />}
      name="value.clientId"
      required
    />
    <Field
      component={TextField}
      label={<FormattedMessage id="ui-lti-courses.platform.jwksUrl" />}
      name="value.jwksUrl"
      required
    />
    <Field
      component={TextField}
      label={<FormattedMessage id="ui-lti-courses.platform.oidcAuthUrl" />}
      name="value.oidcAuthUrl"
      required
    />
  </>
);
