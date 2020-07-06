import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { EntryManager } from '@folio/stripes/smart-components';
import { stripesConnect } from '@folio/stripes/core';

import PermissionSetDetails from './PermissionSetDetails';
import PermissionSetForm from './PermissionSetForm';

import constants from './constants';

function validate(values) {
  const errors = {};

  if (!values.displayName) {
    errors.displayName = <FormattedMessage id="ui-users.permissions.emptyField" />;
  }

  return errors;
}

class PermissionSets extends React.Component {
  static manifest = Object.freeze({
    entries: {
      type: 'okapi',
      records: 'configs',
      DELETE: {
        path: 'configurations/entries',
      },
      POST: {
        path: 'configurations/entries',
      },
      PUT: {
        path: 'configurations/entries',
      },
      GET: {
        path: '/configurations/entries?limit=1000&query=(module=EDGELTICOURSES',
      },
      path: 'configurations/entries',
    },
  });

  static propTypes = {
    resources: PropTypes.shape({
      entries: PropTypes.shape({
        records: PropTypes.arrayOf(PropTypes.object),
      }),
    }).isRequired,
    mutator: PropTypes.shape({
      permissionSets: PropTypes.shape({
        POST: PropTypes.func,
        PUT: PropTypes.func,
        DELETE: PropTypes.func,
      }),
    }).isRequired,
  };

  render() {
    const {
      mutator,
      resources: { entries },
    } = this.props;

    const platforms = (entries?.records ?? [])
      .filter(e => e.code === constants.ISSUER)
      .map(e => ({
        id: e.id,
        label: e.value,
      }))
      .sort((a, b) => a.localeCompare(b));

    return (
      <FormattedMessage id="ui-users.platform">
        {(entryLabel) => (
          <EntryManager
            {...this.props}
            parentMutator={mutator}
            entryList={platforms}
            detailComponent={PermissionSetDetails}
            paneTitle={<FormattedMessage id="ui-users.settings.permissionSet" />}
            entryLabel={entryLabel}
            entryFormComponent={PermissionSetForm}
            validate={validate}
            nameKey="displayName"
            permissions={{
              put: 'perms.permissions.item.post',
              post: 'perms.permissions.item.post',
              delete: 'perms.permissions.item.delete',
            }}
          />
        )}
      </FormattedMessage>
    );
  }
}

export default stripesConnect(PermissionSets);