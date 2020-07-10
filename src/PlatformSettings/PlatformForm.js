import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Field } from 'redux-form';
import { Layout, TextField } from '@folio/stripes/components';

export default () => (
  <Layout className="padding-bottom-gutter">
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
    <Field
      component={TextField}
      label={<FormattedMessage id="ui-lti-courses.platform.searchUrl" />}
      name="value.searchUrl"
      required
    />
    <Layout className="padding-bottom-gutter">
      <FormattedMessage id="ui-lti-courses.platform.searchUrl.description" />
    </Layout>
    <Field
      component={TextField}
      label={<FormattedMessage id="ui-lti-courses.platform.cssUrl" />}
      name="value.cssUrl"
    />
    <Layout className="padding-bottom-gutter">
      <FormattedMessage id="ui-lti-courses.platform.cssUrl.description" />
    </Layout>
  </Layout>
);
